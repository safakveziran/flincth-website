# Flincth website — Dark edition

Bu klasör açık temadan bağımsızdır. Koyu lacivert yüzeyler, açık metinler ve mavi vurgular `dark.css` içinde tanımlanır. Açık temalı orijinal klasör değiştirilmemiştir.

Site Jekyll ile derlenir. GitHub Pages bunu her yayında kendisi yapar; ek bir ayar veya GitHub Action gerekmez. Sayfalar artık tek başına tam HTML değildir, bu yüzden `index.html` dosyasını tarayıcıda doğrudan açmak çalışmaz. Yerelde önizlemek için (Ruby gerekir):

```sh
bundle install
bundle exec jekyll serve   # http://localhost:4000
```

Header, footer ve çerez bandı tek yerde durur; bir bağlantıyı değiştirmek için ilgili dosyayı bir kez düzenlemek yeterlidir:

- `_layouts/default.html`: Tüm sayfaların ortak iskeleti (`<head>`, header, footer, çerez bandı). Sayfalar üstteki `---` bloğunda `layout: default`, `title` ve `description` verir; yalnızca `<main>` içeriğini taşır.
- `_includes/header.html`, `_includes/footer.html`, `_includes/consent.html`: Ortak parçalar
- `_includes/head-meta.html`: Canonical, Open Graph ve Twitter etiketleri (başlık ve açıklama sayfadan alınır)
- `_includes/schema/home.en.html`: Ana sayfanın JSON-LD yapılandırılmış verisi
- `_includes/page-url.html`: Bir sayfanın geçerli dildeki adresini verir (bkz. Çok dilli yapı)
- `_includes/language-links.html`: Footer'daki dil seçici
- `_data/languages.yml`: Yayınlanan diller; ilki varsayılan dildir
- `_data/i18n/en.yml`: Ortak parçaların metinleri
- `_config.yml`, `Gemfile`: Jekyll ayarları ve GitHub Pages ile aynı sürümler
- `index.html`: İngilizce ana sayfa içeriği
- `styles.css`: Mobil uyumlu tasarım, hareket azaltma ve klavye odak stilleri
- `dark.css`: Tüm sayfa ve etkileşimli önizleme durumları için koyu tema
- `script.js`: Code / Write / Research temsili düzen seçicisi
- `consent.js`: Çerez onay bandı ve onaya bağlı Google Analytics yüklemesi
- `notifications.js`: OneSignal web push aboneliği (altbilgideki Notifications bağlantısı)
- `OneSignalSDKWorker.js`: OneSignal service worker (site kökünde durmalı)
- `privacy.html`: Gizlilik politikası (site ve uygulama ayrı ayrı)
- `support.html`: Destek ve sık karşılaşılan sorunlar
- `404.html`: GitHub Pages hata sayfası
- `assets/og-image.png`: 1200×630 paylaşım görseli (`og:image`, `twitter:image`)
- `sitemap.xml`: Site haritası; `sitemap` değeri olan sayfalardan otomatik üretilir, elle düzenlenmez
- `robots.txt`, `llms.txt`: Arama motoru ve asistan keşfi
- `assets/app-icon.png`: Flincth projesindeki uygulama ikonu

## Yayından önce

Site yerel teslim için hazırlanmıştır; internete yayınlanmamıştır. App Store onayı henüz doğrulanmadığı için satış bağlantısı yerine “Coming to the Mac App Store” gösterilir. Yayına çıktığında bu alanı gerçek mağaza bağlantısıyla değiştirin. Fiyat bilerek belirtilmemiştir.

Pencere görselleri gerçek uygulama ekran görüntüsü değil, etkileşimli HTML/CSS tanıtım temsilleridir; sayfada bu durum belirtilir. Kısayol tuşları da örnektir; kullanıcı uygulamada kendi kısayollarını atar. Gerçek pencere yerleşimi Flincth Apply Shortcut gerektirir.

Uygulama gizliliğini anlatan metin bir hukuki gizlilik politikası yerine geçmez. App Store için ayrı destek ve gizlilik sayfaları hazırlanmalıdır.

Harici font bağımlılığı yoktur. Sayfa, Google Analytics (GA4, ölçüm kimliği `G-4JBS4T9RZ0`) etiketini yükler; bu etiket üçüncü taraf JavaScript indirir, çerez kullanır ve ağ isteği yapar. Bu yalnızca web sitesi için geçerlidir — uygulamanın kendisi hâlâ hesapsız, sunucusuz ve ağ erişimsizdir.

Çerez onayı `consent.js` ile yönetilir. Ziyaretçi kabul edene kadar hiçbir Google isteği yapılmaz; ret kaydedilir ve tekrar sorulmaz. Seçim `localStorage` içinde `flincth-analytics-consent` anahtarında tutulur ve altbilgideki “Cookies” bağlantısıyla değiştirilebilir. Onay akışı harici bir çerez hizmetine bağlı değildir.

## Yayına almadan önce

`privacy.html` ve `support.html` sayfalarındaki `support@flincth.com` adresi varsayılan olarak yazılmıştır. App Store başvurusundan önce bu adresin gerçekten çalıştığından emin olun veya kendi adresinizle değiştirin.

## Web bildirimleri (OneSignal)

Web push, `notifications.js` ile yönetilir. App ID (`b1a1845c-01c6-4927-be28-07d290bed717`) dosyanın başında tanımlıdır; App ID gizli bir değer değildir, tarayıcıya gönderilir.

OneSignal panelinde kontrol edilmesi gerekenler:

1. Site URL `https://flincth.com` olmalı ve "My site is not fully HTTPS" işaretli olmamalı.
2. Otomatik istem (slide prompt / native prompt) kapalı kalsın; abonelik yalnızca altbilgideki bağlantıdan başlatılır.

`OneSignalSDKWorker.js` dosyası site kökünde kalmalıdır; service worker kapsamı buna bağlıdır. OneSignal, GitHub Pages üzerinde kendi dosyalarını yerleştiremediği için bu dosya depoda tutulur.

Push desteklemeyen tarayıcılarda (ör. ana ekrana eklenmemiş iOS Safari) altbilgideki Notifications bağlantısı gizli kalır ve hiçbir OneSignal isteği yapılmaz.

Analytics gibi bu da yalnızca web sitesi içindir: uygulamanın kendisi hâlâ hesapsız, sunucusuz ve ağ erişimsizdir.

## Çok dilli yapı

Site şu an yalnızca İngilizce yayınlanıyor, ama yeni bir dil eklemek için gereken altyapı hazır. Varsayılan dil (`_data/languages.yml` içindeki ilk dil) kök adreste durur (`/privacy`); diğer diller kendi klasöründe yayınlanır (`/tr/privacy`).

Her sayfanın üst bilgisinde bir `ref` anahtarı vardır (`home`, `privacy`, `support`). Aynı sayfanın farklı dillerdeki sürümleri aynı `ref` değerini taşır. Şablon bu eşleşmeden şunları kendisi üretir:

- `hreflang` ve `og:locale:alternate` etiketleri; varsayılan dil `x-default` olur
- Footer'daki dil seçici. Sayfa yalnızca tek dilde varsa görünmez.
- Header ve footer bağlantıları geçerli dildeki sayfalara gider. Bir sayfa o dile henüz çevrilmediyse bağlantı varsayılan dildeki sayfaya düşer, kırılmaz.
- `sitemap.xml` içinde her dil sürümü ve karşılıkları

### Yeni dil ekleme (örnek: Türkçe)

1. `_data/languages.yml` dosyasına dili ekleyin (`code: tr`, `name: Türkçe`, `locale: tr_TR`, `dir: ltr`).
2. `_config.yml` içindeki `defaults` listesine klasörün dilini ekleyin: `- scope: { path: "tr" }` / `values: { lang: tr }`.
3. `_data/i18n/en.yml` dosyasını `_data/i18n/tr.yml` olarak kopyalayıp değerleri çevirin.
4. Sayfaları `tr/` klasörüne kopyalayıp çevirin: `tr/index.html`, `tr/privacy.html`, `tr/support.html`. `ref` değerlerini değiştirmeyin; `title`, `description` ve içeriği çevirin.
5. Ana sayfanın kopyasında şunları da çevirin:
   - `#setup-data` bloğu: Önizlemedeki kurulum metinleri ve `{name} setup active` durumu. `{name}` yer tutucusunu koruyun.
   - `schema` değeri: `_includes/schema/home.en.html` dosyasını `home.tr.html` olarak kopyalayıp çevirin, `inLanguage` değerini `tr` yapın ve `tr/index.html` içinde `schema: schema/home.tr.html` yazın.
6. Sayfa içeriğindeki bağlantıları o dilin adresleriyle değiştirin; örneğin gizlilik sayfasının sonundaki `← Back to Flincth` bağlantısı `/tr/` olmalı.

`404.html` tek dillidir: GitHub Pages bütün site için yalnızca kökteki 404 sayfasını gösterir.

