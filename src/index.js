let galleryContents = ""
let imagesFolderPath = "images/"

function add(fileName)
{
    let result = `
    
    <div>
        <img src="${imagesFolderPath + fileName}" class="gallery_image">
    </div>

    `
    galleryContents = galleryContents + result
}

let a = await fetch("./images")
let t = await a.text()
console.log(t)

add("earth.JPG")
add("felt.png")
add("happy_black_hole.png")
add("shroom_plush.png")

document.getElementById("gallery").innerHTML = galleryContents