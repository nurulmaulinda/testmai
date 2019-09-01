words_count = (sentences, word) => {
  let wordCount = 0
      // Hapus semua karakter kecuali alphabet, numeric, space dan ubah menjadi bentuk Array.
      sentencesArr = sentences.replace(/[^\w\s]/gi, '').split(' ')

  for (let i = 0; i < sentencesArr.length; i++) {
    if(sentencesArr[i].toLowerCase() == word.toLowerCase()) wordCount++
  }

  return wordCount
}

let setences = "Kata adalah elemen dari kalimat. Terdapat beragam jenis-jenis kata untuk bisa disatukan menjadi kalimat. Ada kata kerja, kata tanya, kata benda, kata keterangan, kata sifat, kata majemuk, kata penghubung (konjungsi), kata ulang, kata ganti, dan masih banyak lagi lainnya. Sekedar mengetahui tapi tidak memahami tentu akan kurang bermanfaat."

console.log(words_count(setences, "kata")) // 11
console.log(words_count(setences, "kalimat")) // 2