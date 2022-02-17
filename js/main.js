document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");
    document.querySelector('.client-messages-close-button').addEventListener('click', messageContainerClose);
    document.querySelector('.client-messages-open-button').addEventListener('click', messageContainerShow);

    document.querySelector('.list-view-button').addEventListener('click', switchToRowView);
    document.querySelector('.grid-view-button').addEventListener('click', switchToDefaultView);
});

function messageContainerShow() {
    document.querySelector('.client-messages-container').classList.add('client-messages-container-wide');
}
function messageContainerClose() {
    document.querySelector('.client-messages-container').classList.remove('client-messages-container-wide');
}

function switchToRowView() {
    document.querySelectorAll('.project-item-wrapper').forEach((item) => {
        item.classList.add('project-item-wrapper-row');
        item.classList.remove('project-item-wrapper-default');
    })
}
function switchToDefaultView() {
    document.querySelectorAll('.project-item-wrapper').forEach((item) => {
        item.classList.add('project-item-wrapper-default');
        item.classList.remove('project-item-wrapper-row');
    })
}

window.addEventListener("resize", function() {
    if (this.window.innerWidth > 880 ) {
        document.querySelector('.client-messages-container').classList.remove('client-messages-container-wide');
    }
});