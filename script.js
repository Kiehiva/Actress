$(function(){
    const $mainMenuItems = $("#main-menu ul").children("li")
    const totalMainMenuItems = $mainMenuItems.length
    
    let openedIndex = 2

    const init = () => {
        if (validIndex(openedIndex)) {
            animateItem($mainMenuItems.eq(openedIndex), true, 700)
        }


        $mainMenuItems.children(".images").click(function () {
            const newIndex = $(this).parent().index()
            
            checkAndAnimateItem(newIndex)
        })

        $(".button").click(function(){
            const newIndex = $(this).index()
            checkAndAnimateItem(newIndex)
        })
    }

    const validIndex = (indexToCheck) => {
        return (indexToCheck >= 0) && (indexToCheck < totalMainMenuItems)
    }

    const animateItem = ($item, toOpen, speed) => {
        const $colorImage = $item.find(".color")
        const itemParam = toOpen ? {width: "420px"} : {width: "140px"}   
        const colorImage =  toOpen ? {left : "0px"} : {left : "140px"}

        $colorImage.animate(colorImage, speed)
        $item.animate(itemParam, speed)
    }

    const checkAndAnimateItem = (indexToCheckAndAnimate) => {
        if (openedIndex === indexToCheckAndAnimate) {
            animateItem($mainMenuItems.eq(indexToCheckAndAnimate), false, 250)
            openedIndex = -1
        } else {
            if (validIndex(indexToCheckAndAnimate)) {
                animateItem($mainMenuItems.eq(openedIndex), false, 250)
                openedIndex = indexToCheckAndAnimate
                animateItem($mainMenuItems.eq(openedIndex), true, 250)

            }
        }
    }

    init()
})