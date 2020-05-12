function areEquallyStrong(yLeft, yRight, fLeft, fRight) {
  const yourWeakest = yLeft <= yRight ? yLeft : yRight;
  const yourStrongest = yLeft >= yRight ? yLeft : yRight;
  const friendWeakest = fLeft <= fRight ? fLeft : fRight;
  const friendStrongest = fLeft >= fRight ? fLeft : fRight;

  return yourStrongest === friendStrongest && yourWeakest === friendWeakest;
}

console.log(areEquallyStrong(10, 15, 15, 10));
console.log(areEquallyStrong(15, 10, 15, 10));
console.log(areEquallyStrong(15, 10, 15, 9));
