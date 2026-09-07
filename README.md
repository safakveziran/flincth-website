# Flincth website — Dark edition

Bu klasör açık temadan bağımsızdır. Koyu lacivert yüzeyler, açık metinler ve mavi vurgular `dark.css` içinde tanımlanır. Açık temalı orijinal klasör değiştirilmemiştir.

`index.html` dosyasını tarayıcıda açın. Kurulum, paket yöneticisi, sunucu veya internet bağlantısı gerekmez.

- `index.html`: İngilizce içerik ve sayfa yapısı
- `styles.css`: Mobil uyumlu tasarım, hareket azaltma ve klavye odak stilleri
- `dark.css`: Tüm sayfa ve etkileşimli önizleme durumları için koyu tema
- `script.js`: Code / Write / Research temsili düzen seçicisi
- `consent.js`: Çerez onay bandı ve onaya bağlı Google Analytics yüklemesi
- `privacy.html`: Gizlilik politikası (site ve uygulama ayrı ayrı)
- `support.html`: Destek ve sık karşılaşılan sorunlar
- `404.html`: GitHub Pages hata sayfası
- `assets/og-image.png`: 1200×630 paylaşım görseli (`og:image`, `twitter:image`)
- `sitemap.xml`, `robots.txt`, `llms.txt`: Arama motoru ve asistan keşfi
- `assets/app-icon.png`: Flincth projesindeki uygulama ikonu

## Yayından önce

Site yerel teslim için hazırlanmıştır; internete yayınlanmamıştır. App Store onayı henüz doğrulanmadığı için satış bağlantısı yerine “Coming to the Mac App Store” gösterilir. Yayına çıktığında bu alanı gerçek mağaza bağlantısıyla değiştirin. Fiyat bilerek belirtilmemiştir.

Pencere görselleri gerçek uygulama ekran görüntüsü değil, etkileşimli HTML/CSS tanıtım temsilleridir; sayfada bu durum belirtilir. Kısayol tuşları da örnektir; kullanıcı uygulamada kendi kısayollarını atar. Gerçek pencere yerleşimi Flincth Apply Shortcut gerektirir.

Uygulama gizliliğini anlatan metin bir hukuki gizlilik politikası yerine geçmez. App Store için ayrı destek ve gizlilik sayfaları hazırlanmalıdır.

Harici font bağımlılığı yoktur. Sayfa, Google Analytics (GA4, ölçüm kimliği `G-4JBS4T9RZ0`) etiketini yükler; bu etiket üçüncü taraf JavaScript indirir, çerez kullanır ve ağ isteği yapar. Bu yalnızca web sitesi için geçerlidir — uygulamanın kendisi hâlâ hesapsız, sunucusuz ve ağ erişimsizdir.

Çerez onayı `consent.js` ile yönetilir. Ziyaretçi kabul edene kadar hiçbir Google isteği yapılmaz; ret kaydedilir ve tekrar sorulmaz. Seçim `localStorage` içinde `flincth-analytics-consent` anahtarında tutulur ve altbilgideki “Cookies” bağlantısıyla değiştirilebilir. Onay akışı harici bir çerez hizmetine bağlı değildir.

## Yayına almadan önce

`privacy.html` ve `support.html` sayfalarındaki `support@flincth.com` adresi varsayılan olarak yazılmıştır. App Store başvurusundan önce bu adresin gerçekten çalıştığından emin olun veya kendi adresinizle değiştirin.
