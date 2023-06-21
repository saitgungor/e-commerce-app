const NotificationBar = () => {
  const menuItems = [
    `14:00'a kadar verilen siparişleriniz aynı gün kargoda.`,
    '60 gün içerisinde koşulsuz iade hakkı!',
    '500₺ üzeri kargo ücretsiz.',
    'Yeni üyelere özel %10 Hoş geldin indirimi',
  ];
  return (
    <div className="relative text-center h-full flex items-center bg-[#ffbba0] text-[#0b0a18] w-full py-xl-12 min-h-[15px] font-medium overflow-hidden">
      {menuItems.map((item, index) => (
        <div
          key={index}
          className="text_slider absolute text-center w-full text-xl-14"
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default NotificationBar;
