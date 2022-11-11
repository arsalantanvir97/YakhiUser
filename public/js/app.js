$('#overlay').modal('show')

setTimeout(function () {
  $('#overlay').modal('hide')
}, 5000)

$(document).ready(function () {
  // for FAQS
  const toggles = document.querySelectorAll('.faq-toggle')
  toggles.forEach((toggle) => {
    toggle.addEventListener('click', () => {
      toggle.parentNode.classList.toggle('active')
    })
  })

  // For Wishlist icon
  $('.wishlist-icon').click(function () {
    $(this).toggleClass('fas fa-heart maroon far fa-heart maroon')
  })

  // Show the first tab by default
  $('.yahki-tabs-stage div.yahki-tab-content').hide()
  $('.yahki-tabs-stage div.yahki-tab-content:first').show()
  $('.yahki-tabs-nav li:first').addClass('yahki-tab-active')

  // Change tab class and display content
  $('.yahki-tabs-nav a').on('click', function (event) {
    event.preventDefault()
    $('.yahki-tabs-nav li').removeClass('yahki-tab-active')
    $(this).parent().addClass('yahki-tab-active')
    $('.yahki-tabs-stage div.yahki-tab-content').hide()
    $($(this).attr('href')).show()
  })

  // Slick slider on the homepage
  var slickOpts = {
    slidesToShow: 1,
    slidesToScroll: 1,
    //centerMode: true,
    easing: 'swing', // see http://api.jquery.com/animate/
    speed: 700,
    dots: true,
    customPaging: function (slick, index) {
      return '<a>' + (index + 1) + '</a>'
    },
  }
  // Init slick carousel
  $('#carousel').slick(slickOpts)

  $('#carousel').slick({
    dots: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
          dots: true,
        },
      },
    ],
  })
  var input = $('.quantity'),
    minValue = parseInt(input.attr('min')),
    maxValue = parseInt(input.attr('max'))

  $('.plus').on('click', function () {
    var inputValue = input.val()
    if (inputValue < maxValue) {
      input.val(parseInt(inputValue) + 1)
    }
  })

  $('.minus').on('click', function () {
    var inputValue = input.val()
    if (inputValue < maxValue) {
      input.val(parseInt(inputValue) - 1)
    }
  })
  $('.enter-icon').click(function () {
    $(this).toggleClass('fa-eye fa-eye-slash')
    var input = $('.enter-input')
    if (input.attr('type') === 'password') {
      input.attr('type', 'text')
    } else {
      input.attr('type', 'password')
    }
  })
})

jQuery(document).ready(function ($) {
  var feedbackSlider = $('.feedback-slider')
  feedbackSlider.owlCarousel({
    items: 1,
    nav: true,
    dots: false,
    autoplay: false,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    navText: [
      "<i class='fa fa-long-arrow-left'></i>",
      "<i class='fa fa-long-arrow-right'></i>",
    ],
    responsive: {
      // breakpoint from 767 up
      767: {
        nav: true,
        dots: false,
      },
    },
  })

  feedbackSlider.on('changed.owl.carousel', function (property) {
    var current = property.item.index
    var prevThumb = $(property.target)
      .find('.owl-item')
      .eq(current)
      .prev()
      .find('img')
      .attr('src')
    var nextThumb = $(property.target)
      .find('.owl-item')
      .eq(current)
      .next()
      .find('img')
      .attr('src')
    $('.thumb-prev').find('img').attr('src', prevThumb)
    $('.thumb-next').find('img').attr('src', nextThumb)
  })

  $('.thumb-next-arrow').on('click', function () {
    feedbackSlider.trigger('next.owl.carousel', [300])
    return false
  })
  $('.thumb-prev-arrow').on('click', function () {
    feedbackSlider.trigger('prev.owl.carousel', [300])
    return false
  })
}) //end ready

var currentTab = 0 // Current tab is set to be the first tab (0)
showTab(currentTab) // Display the current tab

function showTab(n) {
  // This function will display the specified tab of the form ...
  var x = document.getElementsByClassName('tab')
  x[n].style.display = 'block'
  // ... and fix the Previous/Next buttons:
  if (n == 0) {
    document.getElementById('prevBtn').style.display = 'none'
  } else {
    document.getElementById('prevBtn').style.display = 'inline'
  }
  if (n == x.length - 1) {
    document.getElementById('nextBtn').innerHTML = 'Back'
  } else {
    document.getElementById('nextBtn').innerHTML = 'Continue'
  }
  // ... and run a function that displays the correct step indicator:
  fixStepIndicator(n)
}

function nextPrev(n) {
  // This function will figure out which tab to display
  var x = document.getElementsByClassName('tab')
  // Exit the function if any field in the current tab is invalid:
  if (n == 1 && !validateForm()) return false
  // Hide the current tab:
  x[currentTab].style.display = 'none'
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n
  // if you have reached the end of the form... :
  if (currentTab >= x.length) {
    //...the form gets submitted:
    document.getElementById('regForm').submit()
    return false
  }
  // Otherwise, display the correct tab:
  showTab(currentTab)
}

function validateForm() {
  // This function deals with validation of the form fields
  var x,
    y,
    i,
    valid = true
  x = document.getElementsByClassName('tab')
  y = x[currentTab].getElementsByTagName('input')
  // A loop that checks every input field in the current tab:
  for (i = 0; i < y.length; i++) {
    // If a field is empty...
    if (y[i].value == '') {
      // add an "invalid" class to the field:
      y[i].className += ' invalid'
      // and set the current valid status to false:
      valid = false
    }
  }
  // If the valid status is true, mark the step as finished and valid:
  if (valid) {
    document.getElementsByClassName('step')[currentTab].className += ' finish'
  }
  return valid // return the valid status
}

function fixStepIndicator(n) {
  // This function removes the "active" class of all steps...
  var i,
    x = document.getElementsByClassName('step')
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(' active', '')
  }
  //... and adds the "active" class to the current step:
  x[n].className += ' active'
}

$('.dmenu').hover(
  function () {
    $(this).find('.sm-menu').first().stop(true, true).slideDown(150)
  },
  function () {
    $(this).find('.sm-menu').first().stop(true, true).slideUp(105)
  }
)

$(document).ready(function () {
  $('.megamenu').on('click', function (e) {
    e.stopPropagation()
  })
})
