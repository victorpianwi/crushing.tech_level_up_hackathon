const preventFormSubmit = () => {
    let form = document.querySelector("form");

    form.addEventListener("submit", (e)=>{
        e.preventDefault();
    })
}

preventFormSubmit();

const menuToggle = () => {
    const profileBtn = document.querySelector('#profilebtn');

    const profileMenu = document.querySelector('#profilemenu');

    const allMenuitems = document.querySelectorAll("[role=menuitem]");

    const closeMenu = () => {
        profileBtn.ariaExpanded = "false";
        profileBtn.focus();
    }

    const handleMenuItemArrowKeyPress = (event, menuItemIndex) => {

        const isLastMenuItem = menuItemIndex === allMenuitems.length - 1;
        const isFirstMenuItem = menuItemIndex === 0;
        const nextMenuItem = allMenuitems.item(menuItemIndex + 1);
        const previousMenuItem = allMenuitems.item(menuItemIndex - 1);

        if(event.key == 'ArrowRight' || event.key == 'ArrowDown'){
            if(isLastMenuItem){
                allMenuitems.item(0).focus();

                return;
            }

            nextMenuItem.focus();

        }

        if(event.key == 'ArrowUp' || event.key == 'ArrowLeft'){
            if(isFirstMenuItem){
                allMenuitems.item(allMenuitems.length - 1).focus();

                return;
            }

            previousMenuItem.focus();

        }
    }

    const openMenu = () => {
        profileBtn.ariaExpanded = "true";
        allMenuitems.item(0).focus();

        profileMenu.addEventListener("keyup", handleMenuEscapeKeypress);

        allMenuitems.forEach((menuitem, menuItemIndex)=> {
            menuitem.addEventListener('keyup', (event)=>{
                handleMenuItemArrowKeyPress(event, menuItemIndex);
            });
        })
    }

    const toggleMenu = () => {
        
        document.querySelector('#notifbar').classList.remove('active');

        const isExpanded = profileBtn.attributes["aria-expanded"].value === "true";

        profileMenu.classList.toggle('active');

        if(isExpanded){
            closeMenu();
        } else {
            openMenu();
        }
    }

    const handleMenuEscapeKeypress = (event) => {
        if(event.key === "Escape"){
            console.log(event.key);
            toggleMenu();
        }
    }

    profileBtn.addEventListener("click", toggleMenu);
}

menuToggle();

const alertToggle = () => {
    const notifbtn = document.querySelector('#notifbtn');

    const notifbar = document.querySelector('#notifbar');

    const notifControls = document.querySelectorAll(".notifcontrol");

    const closeMenu = () => {
        notifbtn.ariaExpanded = "false";
        notifbtn.focus();
    }

    const handleNotifControlArrowKeyPress = (event, notifControlIndex) => {

        const isLastNotifControl = notifControlIndex === notifControls.length - 1;
        const isFirstNotifControl = notifControlIndex === 0;
        const nextNotifControl = notifControls.item(notifControlIndex + 1);
        const previousNotifControl = notifControls.item(notifControlIndex - 1);

        if(event.key == 'ArrowRight' || event.key == 'ArrowDown'){
            if(isLastNotifControl){
                notifControls.item(0).focus();

                return;
            }

            nextNotifControl.focus();

        }

        if(event.key == 'ArrowUp' || event.key == 'ArrowLeft'){
            if(isFirstNotifControl){
                notifControls.item(notifControls.length - 1).focus();

                return;
            }

            previousNotifControl.focus();

        }
    }

    const openMenu = () => {
        notifbtn.ariaExpanded = "true";
        notifControls.item(0).focus();

        notifbtn.addEventListener("keyup", handleNotifEscapeKeypress);

        notifControls.forEach((notifControl, notifControlIndex)=> {
            notifControl.addEventListener('keyup', (event)=>{
                handleNotifControlArrowKeyPress(event, notifControlIndex);
            });
        })
    }

    const toggleMenu = () => {

        document.querySelector('#profilemenu').classList.remove('active');

        const isExpanded = notifbtn.attributes["aria-expanded"].value === "true";

        notifbar.classList.toggle('active');

        if(isExpanded){
            closeMenu();
        } else {
            openMenu();
        }
    }

    const handleNotifEscapeKeypress = (event) => {
        if(event.key === "Escape"){
            console.log(event.key);
            toggleMenu();
        }
    }

    notifbtn.addEventListener("click", toggleMenu);
}

alertToggle();

const extendRedirect = () => {
    document.querySelector('.extendbtn').addEventListener('click', ()=>{
        window.location.assign('https://www.shopify.com/pricing')
    })
}

extendRedirect();

const closeExtend = () =>{
    let extendSection = document.querySelector(".extend");

    let closeExtendBtn = document.querySelector(".extendx");

    closeExtendBtn.addEventListener("click", ()=>{
        extendSection.style.display = "none";
    })
}

closeExtend();

const setUpGuide = () => {
    const viewbtn = document.querySelector('#viewbtn');

    const setupguide = document.querySelector('#setupguide');

    const setups = document.querySelectorAll(".setup");

    const closeMenu = () => {
        viewbtn.ariaExpanded = "false";
        viewbtn.focus();
    }

    const openMenu = () => {
        notifbtn.ariaExpanded = "true";
        setups.item(0).classList.toggle('active');
    }

    const toggleMenu = () => {
        const isExpanded = viewbtn.attributes["aria-expanded"].value === "true";

        setupguide.classList.toggle('active');
        viewbtn.classList.toggle('active');

        if(isExpanded){
            closeMenu();
        } else {
            openMenu();
        }
    }


    viewbtn.addEventListener("click", toggleMenu);
}

setUpGuide();

const updateProgressBar = () => {
    let total = 5;
    let completed = 0;

    const checkboxs = document.querySelectorAll('.setupcheck');

    for (let i = 0; i < checkboxs.length; i++) {
        let checkbox = checkboxs[i];

        if(!checkbox.classList.contains("unchecked")) {
            completed++;
        }
    }

    let progressbar = document.querySelector(".progressbar");
    let percentage = (completed / total) * 100;
    progressbar.style.width = percentage + "%";

    let progressnum = document.querySelector('.progressnum');
    progressnum.innerText = completed;


}

const check = () => {

    const HIDDEN_CLASS = "hidden";

    const setupCheckButton = document.querySelectorAll('.setupcheck');

    const defaultCheckbox = document.querySelectorAll('.default');
    const spinnerCheckbox = document.querySelectorAll('.spinner');
    const checkedCheckbox = document.querySelectorAll('.checked');

    const checkboxStatus = document.querySelectorAll('.checkstatus');

    const setups = document.querySelectorAll(".setup");
    const headtexts = document.querySelectorAll(".headtext");

    for (let i = 0; i < setupCheckButton.length; i++) {

        const handleMarkAsDone = () => {
            
            defaultCheckbox[i].classList.add(HIDDEN_CLASS);
            spinnerCheckbox[i].classList.remove(HIDDEN_CLASS);
    
            checkboxStatus[i].ariaLabel = "Loading. Please wait...";
    
            setTimeout(()=>{
                spinnerCheckbox[i].classList.add(HIDDEN_CLASS);
                checkedCheckbox[i].classList.remove(HIDDEN_CLASS);
    
                setupCheckButton[i].ariaLabel = setupCheckButton[i].ariaLabel.replace("as done", "as not done");
    
                const text = setupCheckButton[i].ariaLabel;
                text.replace("as not done", "as done");
    
                checkboxStatus[i].ariaLabel = "Successfully marked" + text;
    
                setupCheckButton[i].classList.remove('unchecked');
                updateProgressBar();

                if(i + 1 < setupCheckButton.length){

                    setups.forEach(setup=> {
                        setup.classList.remove('active');
                    });
    
                    setups[i + 1].classList.toggle('active');
                    setupCheckButton[i + 1].focus();
    
                    return;
                }

            }, 3000)
    
        }
    
        const handleMarkAsNotDone = () => {
    
            checkedCheckbox[i].classList.add(HIDDEN_CLASS);
            spinnerCheckbox[i].classList.remove(HIDDEN_CLASS);
    
            checkboxStatus[i].ariaLabel = "Loading. Please wait...";
    
            setTimeout(()=>{
                spinnerCheckbox[i].classList.add(HIDDEN_CLASS);
                defaultCheckbox[i].classList.remove(HIDDEN_CLASS);
    
                setupCheckButton[i].ariaLabel = setupCheckButton[i].ariaLabel.replace("as not done", "as done");
    
                const text = setupCheckButton[i].ariaLabel;
                text.replace("as done", "as not done");
    
                checkboxStatus[i].ariaLabel = "Successfully marked" + text;
    
                setupCheckButton[i].classList.add('unchecked');
                updateProgressBar();
            }, 3000)
    
        }
    
        const handleCheck = () => {

            if(i > 0 && setupCheckButton[i - 1].classList.contains('unchecked')){

                setups.forEach(setup=> {
                    setup.classList.remove('active');
                });

                setups[i - 1].classList.toggle('active');
                setupCheckButton[i - 1].focus();

                return;
            }

            const setupActive = setups[i].classList.contains('active');

            console.log(setupActive);

            if(!setupActive){

                setups.forEach(setup=> {
                    setup.classList.remove('active');
                });

                setups[i].classList.toggle('active');
            }
            
            const markedAsDone = setupCheckButton[i].classList.contains("unchecked");
    
            if(markedAsDone){
                handleMarkAsDone();
            } else {

                if(i + 1 < setupCheckButton.length && !setupCheckButton[i + 1].classList.contains('unchecked')){

                    setups.forEach(setup=> {
                        setup.classList.remove('active');
                    });
    
                    setups[i + 1].classList.toggle('active');
                    setupCheckButton[i + 1].focus();
    
                    return;
                }

                handleMarkAsNotDone();
            }
    
        }
    
        setupCheckButton[i].addEventListener('click', handleCheck);

        headtexts[i].addEventListener('click', ()=>{

            setups.forEach(setup=> {
                setup.classList.remove('active');
            });

            setups[i].classList.toggle('active');
            setupCheckButton[i].focus();
        })
    }
}

check();
