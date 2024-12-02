document.addEventListener("DOMContentLoaded", function() {
    // ************************ Flipping Card Logic ***************************/
    // Header Menu Courses Dropdown Logic
    var modalSlideDownPopup = document.getElementById("modalSlideDownPopup");
    var modalSlideDownPopupBtn = document.getElementsByClassName(
        "modalSlideDownPopupBtn"
    );
    var modalSlideDownPopupClose = document.getElementsByClassName(
        "modal-slide-down-popup-content-close"
    )[0];
    modalSlideDownPopup;


    if (modalSlideDownPopup != null) {

        for (var i = 0; i < modalSlideDownPopupBtn.length; i++) {
            modalSlideDownPopupBtn[i].addEventListener("click", function() {
                modalSlideDownPopup.style.transform = "translateY(0%)";
                document.querySelector("body").style.overflow = "hidden";
            });
        }

    }

    if (modalSlideDownPopupClose != null) {

        modalSlideDownPopupClose.onclick = function() {
            modalSlideDownPopup.style.transform = "translateY(-100%)";
            document.querySelector("body").style.overflow = "unset";
        };


    }

    window.onclick = function(event) {
        if (event.target == modalSlideDownPopup) {
            modalSlideDownPopup.style.transform = "translateY(-100%)";
            document.querySelector("body").style.overflow = "unset";
        }
    };

    $(document).keydown(function(event) {
        if (event.keyCode == 27) {
            modalSlideDownPopup.style.transform = "translateY(-100%)";
            document.querySelector("body").style.overflow = "unset";
        }
    });

    document.addEventListener("DOMContentLoaded", function() {
        // Header Menu Courses Dropdown Logic
        var modalSlideDownPopup = document.getElementById("modalSlideDownPopup");
        var modalSlideDownPopupBtn = document.getElementsByClassName(
            "modalSlideDownPopupBtn"
        );
        var modalSlideDownPopupClose = document.getElementsByClassName(
            "modal-slide-down-popup-content-close"
        )[0];
        modalSlideDownPopup;
        for (var i = 0; i < modalSlideDownPopupBtn.length; i++) {
            modalSlideDownPopupBtn[i].addEventListener("click", function() {
                modalSlideDownPopup.style.transform = "translateY(0%)";
                document.querySelector("body").style.overflow = "hidden";
            });
        }

        modalSlideDownPopupClose.onclick = function() {
            modalSlideDownPopup.style.transform = "translateY(-100%)";
            document.querySelector("body").style.overflow = "unset";
        };

        window.onclick = function(event) {
            if (event.target == modalSlideDownPopup) {
                modalSlideDownPopup.style.transform = "translateY(-100%)";
                document.querySelector("body").style.overflow = "unset";
            }
        };

        $(document).keydown(function(event) {
            if (event.keyCode == 27) {
                modalSlideDownPopup.style.transform = "translateY(-100%)";
                document.querySelector("body").style.overflow = "unset";
            }
        });


    });
    var work_menu_item = document.querySelectorAll('.show-work-submenu');
    var work_submenu = document.querySelector('.work-submenu');
    if (work_menu_item != null) {
        work_menu_item.forEach(function(item) {
            item.addEventListener('click', function() {
                work_submenu.classList.toggle('showing');
            });
        });
    }



    //  Cards and Names are Pulled From Footer //

    function do_flips(logoCardsIdentify) {
        var logoCards = document.querySelectorAll(logoCardsIdentify);
        const lastLogoIndexes = Array.from({ length: logoCards.length }, () => []);

        function getAlllogos() {
            var elementsWithDataIndex = document.querySelectorAll(
                logoCardsIdentify + "[data-index]"
            );
            const dataIndexValues = [];
            elementsWithDataIndex.forEach((element) => {
                const dataIndexValue = element.getAttribute("data-index");
                dataIndexValues.push(dataIndexValue);
            });
            return dataIndexValues;
        }

        function getRandomUniqueLogoIndex(cardIndex) {
            const allLogoIndexes = Array.from({ length: logos.length }, (_, i) => i);
            const usedLogoIndexes = lastLogoIndexes[cardIndex];
            const availableLogoIndexes = allLogoIndexes.filter(
                (index) => !usedLogoIndexes.includes(index)
            );

            if (availableLogoIndexes.length === 0) {
                // All logos have been used; reset the used logos for this card
                lastLogoIndexes[cardIndex] = [];
                return getRandomUniqueLogoIndex(cardIndex); // Recursively get a new random index
            }

            const randomIndex =
                availableLogoIndexes[Math.floor(Math.random() * availableLogoIndexes.length)];

            // Update the last indexes for the card
            lastLogoIndexes[cardIndex].push(randomIndex);

            return randomIndex;
        }

        function setLogoAndName(card, logoIndex) {
            if (card) {
                const front = card.querySelector(".front img");
                const back = card.querySelector(".back img");
                const frontCompanyName = card.querySelector(".front .company-name");
                const backCompanyName = card.querySelector(".back .company-name");

                if (front && back && frontCompanyName && backCompanyName) {
                    let logo = logos[logoIndex]; // Use let instead of const
                    const companyName = logos_name[logoIndex];

                    let attemptCount = 0;
                    while (getAlllogos().includes(logo) && attemptCount < logoCards.length * 2) {
                        logoIndex = getRandomUniqueLogoIndex(Array.from(logoCards).indexOf(card));
                        logo = logos[logoIndex];
                        attemptCount++;
                    }

                    if (attemptCount >= logoCards.length * 2) {
                        // Handle the case when a unique logo couldn't be found after multiple attempts
                        return;
                    }

                    front.src = logo;
                    back.src = logo;

                    if (logos_name.length > 0) {
                        frontCompanyName.innerHTML = companyName;
                        backCompanyName.innerHTML = companyName;
                    }

                    front.closest(logoCardsIdentify).setAttribute("data-index", logo);
                }
            }
        }

        function flipCard(card) {
            if (card != null) {
                card.classList.toggle("flip");
                card.classList.add("shadow");
                setTimeout(() => {
                    card.classList.remove("shadow");
                }, 1200);
            }
        }

        function startFlipping() {
            setInterval(() => {
                const randomIndex = Math.floor(Math.random() * logoCards.length);
                const randomCard = logoCards[randomIndex];

                flipCard(randomCard);

                setTimeout(() => {
                    const logoIndex = getRandomUniqueLogoIndex(randomIndex);
                    setLogoAndName(randomCard, logoIndex);
                }, 500);
            }, 1500);
        }

        startFlipping();
    }

    const logoCards = document.querySelector(".logo-card");
    const logoCards2 = document.querySelector(".logo-card-2");
    const logoCards3 = document.querySelector(".logo-card-3");

    if (logoCards != null) {
        do_flips(".logo-card");
    }

    if (logoCards2 != null) {
        do_flips(".logo-card-2");
    }

    if (logoCards3 != null) {
        do_flips(".logo-card-3");
    }
});