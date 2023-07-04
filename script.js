let tablinks = document.getElementsByClassName('tab-links')
let tabcontents = document.getElementsByClassName('tab-contents')
function opentab(tab){
    for(tablink of tablinks){
        tablink.classList.remove('active-link')
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove('active-tab')
    }
    event.currentTarget.classList.add('active-link')
    document.getElementById(tab).classList.add('active-tab')
}

// handling menu bar
let sideMenu = document.getElementById('sideMenu')
function closeMenu(){
     sideMenu.style.right = "-200px"
}
function openMenu(){
    sideMenu.style.right = '0'
}


const scriptURL = 'https://script.google.com/macros/s/AKfycbxMTOxEiFjc0hUrgWN9mQ-5n47-T5l_UMVKfV8-yn7yE-N2vm1oDMacEvlSgU707DB62A/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById('msg')

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = 'Message sent successfully'
        setTimeout(() => {
            msg.innerHTML = ''
        }, 5000);
        form.reset()
    })
      .catch(error => console.error('Error!', error.message))
  })