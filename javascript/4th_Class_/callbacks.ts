// function arrayProcessitem(array: number[], abc: (item: number) => void) {
//     for (let index = 0; index < array.length; index++) {
//         abc(array[index])
//     }
// }

// function logItemSync(item: number) {
//     console.log('processing item synchronously:', item)
// }

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// arrayProcessitem(arr, logItemSync)

//problems with Callbacks (Callback Hell)
//a nested callbacks stacked below one another 
//forming a pyramind structure also known as pyramind of doom.
function getUserDatra(data: number, get_next_user_data?: () => void) {
    setTimeout(() => {
        console.log("User Data:", data)
        if (get_next_user_data) {
            //get_next_user_data()
        }
    }, 1000);
}
// Call back hell
getUserDatra(111, function () {
    getUserDatra(222, () => {
        getUserDatra(333)
    })
})