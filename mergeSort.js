const merge = (leftArr, rightArr) => {
    const output = []
    let leftIndex = 0
    let rightIndex = 0

    while (leftIndex < leftArr.length && rightIndex < rightArr.length) {

        if (leftArr[leftIndex] < rightArr[rightIndex]) {
            output.push(leftArr[leftIndex])
            leftIndex++
        } else {
            output.push(rightArr[rightIndex])
            rightIndex++
        }
    }

    return [...output, ...leftArr.slice(leftIndex), ...rightArr.slice(rightIndex)]
}

const mergeSort = arr => {
    if (arr.length <= 1) {
        return arr
    }

    const middleIndex = Math.floor(arr.length / 2)
    const leftArr = arr.slice(0, middleIndex)
    const rightArr = arr.slice(middleIndex)

    return merge(mergeSort(leftArr), mergeSort(rightArr))
}

const testArr = [101, 24, 1, 9, 3, 5, 2, 28, 132, 3, 3, 48,]

console.log(mergeSort(testArr))