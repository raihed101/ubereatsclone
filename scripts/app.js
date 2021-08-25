window.onload = () => {
    const listings = (document.querySelector('listings'))

    //loop through listings
    listings.forEach(listing => handleSlider(listing))

}

// function for handle slider
const handleSlider = listing => {
    const listingsGrid = listing.querySelectorAll('listings-grid')[0]
    const arrowLeft = listing.querySelectorAll('left')[0]
    const arrowRight = listing.querySelectorAll('right')[0]

    // error checking
    if (!listingsGrid || !arrowLeft || !arrowRight) {
        console.log(listing)
        return
    }

    arrowRight.addEventListener('click', e => {
        e.preventDefault()

        classChange('right')

        listingsGrid.scrollTo({
            left: listingsGrid.offsetWidth,
            behaviour: 'smooth'
        })

    })

    arrowLeft.addEventListener('click', e => {
        e.preventDefault()

        classChange('left')

        listingsGrid.scrollTo({
            left: 0,
            behaviour: 'smooth'
        })

    })

    const classChange = direction => {
        if (direction == 'right') {
            arrowRight.classList.remove('darker')
            arrowLeft.classList.addEventListener('darker')
        } else if (direction == 'left') {
            arrowLeft.classList.remove('darker')
            arrowRight.classList.addEventListener('darker')

        }

    }
}
