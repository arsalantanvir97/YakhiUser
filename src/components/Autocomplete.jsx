import React from 'react'
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete'

export default class Autocomplete extends React.Component {
  constructor(props) {
    super(props)
    this.state = { address: '', latitude: '', longitude: '' }
  }

  handleChange = (address) => {
    this.setState({ address })
  }

  componentDidMount() {
    const longitude = this?.props?.location?.coordinates[0]
    const latitude = this?.props?.location?.coordinates[1]
    this.setState({ address: this.props.address, longitude, latitude })
  }

  componentDidUpdate(prevProps) {
    if (prevProps.address !== this.props.address) {
      const longitude = this?.props?.location?.coordinates[0]
      const latitude = this?.props?.location?.coordinates[1]
      this.setState({ address: this.props.address, longitude, latitude })
    }
  }

  handleSelect = (address) => {
    geocodeByAddress(address)
      .then((results) => {
        console.log(results[0])
        let city
        let zip_code
        let state
        let country
        results[0].address_components.forEach((add_comp) => {
          const isLocality = add_comp.types.find((type) => type === 'locality')
          if (isLocality) city = add_comp.long_name
          const administrative_area_level_1 = add_comp.types.find(
            (type) => type === 'administrative_area_level_1'
          )
          if (administrative_area_level_1) state = add_comp.long_name
          const country123 = add_comp.types.find((type) => type === 'country')
          if (country123) country = add_comp.long_name
          const isZip = add_comp.types.find((type) => type === 'postal_code')
          if (isZip) zip_code = add_comp.long_name
        })
        console.log('state', state)
        this.setState({
          address: results[0]?.formatted_address,
          city,
          state,
          country,
          zip_code,
        })
        return getLatLng(results[0])
      })
      .then((latLng) => {
        this.setState(
          {
            latitude: latLng.lat,
            longitude: latLng.lng,
          },
          () =>
            this.props.handleLocation(
              this.state.latitude,
              this.state.longitude,
              this.state.address,
              this.state.city,
              this.state.state,
              this.state.country,
              this.state.zip_code
            )
        )
      })
      .catch(
        (error) => console.log('error', error)
        // alert(
        //   "Error getting location. Please disable your adblocker or try again later."
        // )
      )
  }

  render() {
    return (
      <PlacesAutocomplete
        value={this.state.address}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div style={{ width: '100%' }}>
            <input
              {...getInputProps({
                placeholder: 'Search Places ...',
                className: 'location-search-input form-control',
              })}
              style={{ width: '100%' }}
            />
            <div className='autocomplete-dropdown-container'>
              {loading && <div>Loading...</div>}
              {suggestions.map((suggestion) => {
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item'
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                  : { backgroundColor: '#ffffff', cursor: 'pointer' }
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                )
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    )
  }
}
