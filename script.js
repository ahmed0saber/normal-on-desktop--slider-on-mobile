const mobileBreakpoint = 768
let iScreenWidth = document.body.getBoundingClientRect().width 
initSlider()
function initSlider(){
	const sliders = document.querySelectorAll('.js-mobile-slider')
	let aFlickitySliders = []
	function initFlickity(slider){
		return new Flickity( slider, {
			cellAlign: 'left',
			prevNextButtons: false
		})
	}
	for(let i=0; i<sliders.length; i++){
		const slider = sliders[i]
		if(iScreenWidth < mobileBreakpoint){
			let oSlider = initFlickity(slider)
			aFlickitySliders.push(oSlider)
		}
	}
	window.addEventListener('resize', () => {
		iScreenWidth = document.body.getBoundingClientRect().width
		for(let i=0; i<sliders.length; i++){
			const oSlider = sliders[i]
			const oFlickSlider = aFlickitySliders[i]
			if(iScreenWidth < mobileBreakpoint){
				if(!oFlickSlider){
					let createdFlickSlider = initFlickity(oSlider)
					aFlickitySliders.push(createdFlickSlider)
				}
			}else{
				if(oFlickSlider){
					oFlickSlider.destroy()
					aFlickitySliders.splice(0, 1)
				}
			}
		}
	})
}