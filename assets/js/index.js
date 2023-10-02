const body = document.querySelector('body');
const modal = document.querySelector('.post-comment__modal');
const modalOpenBtn = document.querySelector('.post-comment__btn');
const modalInput = document.querySelector('.post-comment__input')
const modalSubmitBtn = document.querySelector('.post-comment__submit');
const modalCancelBtn = document.querySelector('.post-comment__cancel');
const addAfter = document.querySelector('.comments_face')

function openModal(){
    return modal.classList.add('active') || body.classList.add("active");
}

function closeModal(){
    return modal.classList.remove('active') || body.classList.remove("active");
}

function elConstructor(tag, selector, value) {
    const crEl = document.createElement(tag);
    crEl.classList.add(selector);
    crEl.innerText = value
    return crEl
}

function addNewComment(el, el2, el3, p, p1) {
    el.appendChild(p);
    el.appendChild(p1);
    el2.appendChild(el);
    el3.appendChild(el2);
}

modalOpenBtn.addEventListener('click', () => {
    openModal();
})

modalCancelBtn.addEventListener('click', () => {
    closeModal();
})

modalSubmitBtn.addEventListener('click', () => {
    const divComments = elConstructor('div', 'comments', '');
    const divCommentsContent = elConstructor('div', 'comment-content', '')
    const pName = elConstructor('p', 'name', 'Anonimus');
    const pComment = elConstructor('p', 'comment', modalInput.value);
    
    if (modalInput.value == ''){
        alert('Comment can`t be empty!!!')
        return
    }
    addNewComment(divCommentsContent, divComments, addAfter, pName, pComment)

    modalInput.value = '';
    closeModal();
})