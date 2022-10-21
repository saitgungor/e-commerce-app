const NotificationBar = () => {
  return (
    <div className="bg-black text-white w-full h-6 overflow-hidden">
      <div className="relative text-center">
        <div className="text_slider absolute text-center w-full">
          14:00'a kadar verilen siparişleriniz aynı gün kargoda.
        </div>
        <div className="text_slider absolute text-center w-full">
          60 gün içerisinde koşulsuz iade hakkı!
        </div>
        <div className="text_slider absolute text-center w-full">
          500₺ üzeri kargo ücretsiz.
        </div>
        <div className="text_slider absolute text-center w-full">
          Yeni üyelere özel %10 Hoş geldin indirimi
        </div>
      </div>
    </div>
  );
};

export default NotificationBar;
