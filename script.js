
const linksSocailMedia = {
    github: "jnt-gomes",
    facebook: "john.promis.37",
    instagram: "jnt_gomes",
    twitter: "jnt_gomes01"
}

function changeLinks() {
    // document.getElementById('userName').textContent = 'Jhonatan Gomes' 
    // pode ser feito desse jeito também
    for (let li of socialLinks.children) {
        const social = li.getAttribute('class')

        li.children[0].href = `https://${social}.com/${linksSocailMedia[social]}`
    }
}

changeLinks()

function getGitInfo() {
    const url = `https://api.github.com/users/${linksSocailMedia.github}`

    fetch(url)
    .then(response => response.json())
    .then(data => {
        
    })

    // console.log(url)
}

// getGitInfo()