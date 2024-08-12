export const responseProvider = (
  //responseProvider adında bir fonksiyon oluştur ve res, responseCode, responseStatus, message ve data parametrelerini al
  res, // res parametresini al
  responseCode, // responseCode parametresini al
  responseStatus, // responseStatus parametresini al
  message, // message parametresini al
  data // data parametresini al
) => {
  res.status(responseCode).json({
    // res.status ile responseCode status kodunu döndür ve json formatında response döndür
    status: responseStatus, // responseStatus durumunu döndür
    message: message, // message mesajını döndür
    data: data, // data verisini döndür
  });
};

export const response500CodeProvider = (res) => {
  // response500CodeProvider adında bir fonksiyon oluştur ve res parametresini al
  res.status(500).json({
    // res.status ile 500 status kodunu döndür ve json formatında response döndür
    status: false, // status false döndür
    message: "Bir hata olustu", // Bir hata olustu mesajını döndür
    data: null, // data null döndür
  });
};
