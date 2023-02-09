export const getImagePath = (image) => {
    // uploads/2022-06-05T16:29:18.470Zadidas2.webp
    const removeUpStr = 'https://marvelous.pw/storage/'.concat(image);
    return removeUpStr;
};