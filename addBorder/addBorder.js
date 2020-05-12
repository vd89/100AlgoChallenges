function addBorder(picture) {
    const lengthOfWall = picture[0].length + 2
    let wall = ''
    for (let i = 0; i < lengthOfWall; i++){
        wall = wall.concat('*')
    }
    picture.unshift(wall)
    picture.push(wall)
    return picture
}

console.log(addBorder(["abc", "ded"]));
