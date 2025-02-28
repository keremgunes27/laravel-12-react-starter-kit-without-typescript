# Laravel 12 + React Starter Kit (JavaScript)

Bu proje, Laravel 12'nin resmi React starter kit'inin TypeScript'ten JavaScript'e çevrilmiş ve Türkçeleştirilmiş versiyonudur.

## Özellikler

- ⚡️ Laravel 12
- 🔥 React
- 🎨 Tailwind CSS
- 🔒 Laravel Breeze Authentication
- 🚀 Inertia.js
- 🌓 Karanlık/Aydınlık Tema
- 📱 Responsive Tasarım
- 🔍 SEO Dostu
- 🛠️ JavaScript (TypeScript'ten dönüştürülmüş)
- 🌍 Türkçe Arayüz

## Kurulum

1. Projeyi klonlayın:

```bash
git clone https://github.com/keremgunes27/laravel-12-react-starter-kit-without-typescript.git
cd laravel-react-starter
```

2. Bağımlılıkları yükleyin:

```bash
composer install
npm install
```

3. Ortam değişkenlerini ayarlayın:

```bash
cp .env.example .env
php artisan key:generate
```

4. Veritabanını hazırlayın:

```bash
php artisan migrate
```

5. Geliştirme sunucularını başlatın:

```bash
# Terminal 1
php artisan serve

# Terminal 2
npm run dev
```

## Yapılan Değişiklikler

### TypeScript'ten JavaScript'e Dönüşüm

- `.tsx` uzantılı dosyalar `.jsx` olarak değiştirildi
- Type tanımlamaları kaldırıldı
- Interface tanımlamaları kaldırıldı
- TypeScript konfigürasyonları temizlendi

### Türkçeleştirme

- Tüm arayüz metinleri Türkçeleştirildi
- Hata mesajları Türkçeleştirildi
- Doğrulama mesajları Türkçeleştirildi
- Bildirimler Türkçeleştirildi

## Geliştirme

Kod kalitesini korumak için:

```bash
# Kod formatlamak için
npm run format

# Linting için
npm run lint
```

## Katkıda Bulunma

1. Bu depoyu fork edin
2. Yeni bir branch oluşturun (`git checkout -b feature/yeniOzellik`)
3. Değişikliklerinizi commit edin (`git commit -m 'feat: yeni özellik eklendi'`)
4. Branch'inizi push edin (`git push origin feature/yeniOzellik`)
5. Bir Pull Request oluşturun

## İletişim

- Website: [keremgunes.com.tr](https://keremgunes.com.tr)
- E-posta: iletisim@keremgunes.com.tr
