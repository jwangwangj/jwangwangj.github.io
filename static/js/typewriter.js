var data = ['Computer Scientist', "Data Scientist", "Software Engineer"]
const speed = 50
let isTyping = true
let dataIndex = 0
let i = 0

typeWriter = () => {
    typing()
}

typing = () => {
    const txt = data[dataIndex]
    if (isTyping) {
        if (i < txt.length) {
            document.getElementById("typewriter").innerHTML += txt.charAt(i)
            i++
            setTimeout(typing, speed)
        } else if (i < txt.length + 50) {
            i++
            setTimeout(typing, speed)
        }else {
            i = txt.length - 1
            isTyping = false
            deleting()
        }
    } else {
        deleting()
    }
}

deleting = () => {
    const txt = document.getElementById("typewriter").innerHTML
    if (!isTyping) {
        if (i >= -10) {
            document.getElementById("typewriter").innerHTML = txt.slice(0, -1)
            i--
            setTimeout(typing, speed)
        } else {
            i = 0
            isTyping = true
            dataIndex = dataIndex === data.length - 1 ? 0 : dataIndex + 1
            typing()
        }
    } else {
        typing()
    }
}

(() => {
    typeWriter()
})()