function addBorder(picture) {
    // const lengthOfWall = picture[0].length + 2
    // let wall = ''
    // for (let i = 0; i < lengthOfWall; i++){
    //     wall = wall.concat('*')
    // }
    let wall = '*'.repeat(picture[0].length+2)
    picture.unshift(wall)
    picture.push(wall)
    for (let i = 0; i < picture.length - 1; i++){
        picture[i] ="*".concat(picture[i],'*')
    } 
    return picture
}

console.log(addBorder(["abc", "ded"]));
