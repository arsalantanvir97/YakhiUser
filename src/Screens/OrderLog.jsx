import React from 'react'

const OrderLog = () => {
    return (
        <div className="container-fluid">
        <div className="row">
          <div className="col-md-11 mx-auto">
            <section className="my-cart mt-5">
              <div className="row align-items-start">
                <div className="col-12 my-4">
                  <h2>Order Log</h2>
                </div>
                <div className="col-md-12">
                  <div className="order-log">
                    <div className="log-sort">
                      <div className="row">
                        <div className="col">
                          <label>Show Entries:</label>
                          <select className="form-control logSelect">
                            <option>10</option>
                            <option>20</option>
                            <option>30</option>
                          </select> 
                        </div>
                        <div className="col">
                          <label>Sort By:</label>
                          <input type="date" name id className="form-control logSelect" />
                        </div>
                        <div className="col">
                          <label>Sort By:</label>
                          <input type="date" name id className="form-control logSelect" />
                        </div>
                        <div className="col">
                          <label>Status:</label>
                          <select className="form-control logSelect">
                            <option>Pending</option>
                            <option>Refunded</option>
                            <option>Delivered</option>
                            <option>In Process</option>
                            <option>Pending</option>
                          </select> 
                        </div>
                        <div className="col-5">
                          <label>Search here</label>
                          <input type="text" className="searchbox form-control logSelect" placeholder="Search" />
                        </div>
                      </div>
                      <div className="row px-2">
                        <div className="col-12">
                          <div className="log-table">
                            <div className="table-responsive">
                              <table className="table table-borderless">
                                <thead>
                                  <tr>
                                    <th scope="col">
                                      S.No.
                                    </th>
                                    <th scope="col">
                                      Order ID.
                                    </th>
                                    <th scope="col">
                                      Order Date
                                    </th>
                                    <th scope="col">
                                      Title
                                    </th>
                                    <th scope="col">
                                      Quantity
                                    </th>
                                    <th scope="col">
                                      Amount Paid
                                    </th>
                                    <th scope="col">
                                      Order Status
                                    </th>
                                    <th scope="col">
                                      Actions
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>1</td>
                                    <td>1</td>
                                    <td>mm/dd/yyyy</td>
                                    <td>Abc Title</td>
                                    <td>002</td>
                                    <td>£1234</td>
                                    <td>
                                      <span className="stat-pending">Pending</span>
                                    </td>
                                    <td>
                                      <div className="dropdown">
                                        <button className="btn dropdown-toggle action-btn" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-expanded="false">
                                          <i className="fas fa-ellipsis-v" />
                                        </button>
                                        <div className="dropdown-menu action-menu" aria-labelledby="dropdownMenuButton">
                                          <a className="dropdown-item" href="order-log-detail.php"><i className="fas fa-eye mr-2 grey" />View</a>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>2</td>
                                    <td>1</td>
                                    <td>mm/dd/yyyy</td>
                                    <td>Abc Title</td>
                                    <td>002</td>
                                    <td>£1234</td>
                                    <td>
                                      <span className="stat-refunded">Refunded</span>
                                    </td>
                                    <td>
                                      <div className="dropdown">
                                        <button className="btn dropdown-toggle action-btn" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-expanded="false">
                                          <i className="fas fa-ellipsis-v" />
                                        </button>
                                        <div className="dropdown-menu action-menu" aria-labelledby="dropdownMenuButton">
                                          <a className="dropdown-item" href="order-log-detail.php"><i className="fas fa-eye mr-2 grey" />View</a>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>3</td>
                                    <td>1</td>
                                    <td>mm/dd/yyyy</td>
                                    <td>Abc Title</td>
                                    <td>002</td>
                                    <td>£1234</td>
                                    <td>
                                      <span className="stat-delivered">Delivered</span>
                                    </td>
                                    <td>
                                      <div className="dropdown">
                                        <button className="btn dropdown-toggle action-btn" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-expanded="false">
                                          <i className="fas fa-ellipsis-v" />
                                        </button>
                                        <div className="dropdown-menu action-menu" aria-labelledby="dropdownMenuButton">
                                          <a className="dropdown-item" href="order-log-detail.php"><i className="fas fa-eye mr-2 grey" />View</a>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>4</td>
                                    <td>1</td>
                                    <td>mm/dd/yyyy</td>
                                    <td>Abc Title</td>
                                    <td>002</td>
                                    <td>£1234</td>
                                    <td>
                                      <span className="stat-process">In Process</span>
                                    </td>
                                    <td>
                                      <div className="dropdown">
                                        <button className="btn dropdown-toggle action-btn" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-expanded="false">
                                          <i className="fas fa-ellipsis-v" />
                                        </button>
                                        <div className="dropdown-menu action-menu" aria-labelledby="dropdownMenuButton">
                                          <a className="dropdown-item" href="order-log-detail.php"><i className="fas fa-eye mr-2 grey" />View</a>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>5</td>
                                    <td>1</td>
                                    <td>mm/dd/yyyy</td>
                                    <td>Abc Title</td>
                                    <td>002</td>
                                    <td>£1234</td>
                                    <td>
                                      <span className="stat-pending">Pending</span>
                                    </td>
                                    <td>
                                      <div className="dropdown">
                                        <button className="btn dropdown-toggle action-btn" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-expanded="false">
                                          <i className="fas fa-ellipsis-v" />
                                        </button>
                                        <div className="dropdown-menu action-menu" aria-labelledby="dropdownMenuButton">
                                          <a className="dropdown-item" href="order-log-detail.php"><i className="fas fa-eye mr-2 grey" />View</a>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-4 justify-content-between align-items-center">
                    <div className="col-md-6 col-12 text-center text-md-left">
                      <p className="show-results">Showing 05 out of 20 Entries</p>
                    </div>
                    <div className="col-md-6 col-12 text-center text-md-right">
                      <div className="content_detail__pagination cdp float-md-right float-none" actpage={1}>
                        <a href="#!-1" className="cdp_i">prev</a>
                        <a href="#!1" className="cdp_i">1</a>
                        <a href="#!2" className="cdp_i">2</a>
                        <a href="#!3" className="cdp_i">3</a>
                        <a href="#!+1" className="cdp_i">next</a>
                      </div>
                    </div>
                  </div>
                </div> 
              </div>
            </section>
            <div className="row mt-5">
              <div className="col-12 text-center">
                <div className="about-bottom-banner">
                  <h3>All Herbs Are Organic Alkaline and Are Naturally Wildcrafted from the Land of their Origin</h3>
                  <p>All herbs used in our products are 100% naturally organic and are selectively picked and tested by a laboratory before use. Each herbal compound is personally prepared with gratification for the purpose of restoring health to our clients.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    )
}

export default OrderLog
