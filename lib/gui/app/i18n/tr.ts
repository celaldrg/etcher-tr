import type en from './en';

const translation = {
	translation: {
		continue: 'Devam',
		ok: 'Tamam',
		cancel: 'İptal',
		skip: 'Atla',
		sure: 'Evet, eminim',
		warning: 'UYARI! ',
		attention: 'Dikkat',
		failed: 'Başarısız',
		completed: 'Tamamlandı',
		yesContinue: 'Evet, devam et',
		reallyExit: "Etcher'ı kapatmak istediğinizden emin misiniz?",
		yesExit: 'Evet, çık',
		progress: {
			starting: 'Başlatılıyor...',
			decompressing: 'Ayıklanıyor...',
			flashing: 'Yazılıyor...',
			finishing: 'Tamamlanıyor...',
			verifying: 'Doğrulanıyor...',
			failing: 'Başarısız',
		},
		message: {
			sizeNotRecommended: 'Önerilmez',
			tooSmall: 'Çok küçük',
			locked: 'Kilitli',
			system: 'Sistem sürücüsü',
			containsImage: 'Kaynak sürücü',
			largeDrive: 'Büyük sürücü',
			sourceLarger: 'Seçilen kaynak bu sürücüden {{byte}} daha büyük.',
			flashSucceed_one: 'Başarılı hedef',
			flashSucceed_other: 'Başarılı hedef',
			flashFail_one: 'Başarısız hedef',
			flashFail_other: 'Başarısız hedef',
			toDrive: '{{description}} ({{name}}) sürücüsüne',
			toTarget_one: '{{num}} hedefe',
			toTarget_other: '{{num}} hedefe',
			andFailTarget_one: '({{num}} hedefe yazılamadı)',
			andFailTarget_other: '({{num}} hedefe yazılamadı)',
			succeedTo: '{{name}}, {{target}} başarıyla yazıldı',
			exitWhileFlashing:
				"Şu anda bir sürücüye yazıyorsunuz. Etcher'ı kapatmak sürücünüzü kullanılamaz durumda bırakabilir.",
			looksLikeWindowsImage:
				'Bir Windows disk görüntüsü yazmaya çalışıyorsunuz gibi görünüyor.\n\nDiğer disk görüntülerinden farklı olarak Windows disk görüntülerinin önyüklenebilir hâle getirilmesi özel işlem gerektirir. Bu amaç için özel olarak tasarlanmış <a href="https://rufus.akeo.ie">Rufus</a> (Windows), <a href="https://github.com/slacka/WoeUSB">WoeUSB</a> (Linux) veya Boot Camp Asistanı (macOS) gibi bir araç kullanmanızı öneririz.',
			image: 'disk görüntüsü',
			drive: 'sürücü',
			missingPartitionTable:
				'Bu, önyüklenebilir bir {{type}} değil gibi görünüyor.\n\nBu {{type}} bir bölüm tablosu içermiyor gibi görünüyor; cihazınız tarafından tanınmayabilir veya önyüklenemeyebilir.',
			largeDriveSize:
				'Bu büyük bir sürücü! Saklamak istediğiniz dosyaları içermediğinden emin olun.',
			systemDrive:
				'Sistem sürücünüzü seçmek tehlikelidir ve sürücünüz silinecektir!',
			sourceDrive: 'Yazmak için seçtiğiniz disk görüntüsünü içeriyor',
			noSpace:
				'Sürücüde yeterli alan yok. Lütfen daha büyük bir sürücü takıp yeniden deneyin.',
			genericFlashError:
				'Bir sorun oluştu. Sıkıştırılmış bir disk görüntüsüyse lütfen arşivin bozuk olmadığını kontrol edin.\n{{error}}',
			validation:
				'Yazma işlemi başarıyla tamamlandı ancak Etcher, disk görüntüsünü sürücüden geri okurken olası bozulma sorunları algıladı.\n\nLütfen disk görüntüsünü farklı bir sürücüye yazmayı düşünün.',
			openError: '{{source}} açılırken bir sorun oluştu.\n\nHata: {{error}}',
			flashError: '{{image}}, {{targets}} yazılırken bir sorun oluştu.',
			unplug:
				'Etcher sürücüye erişimini kaybetmiş gibi görünüyor. Sürücü yanlışlıkla çıkarılmış olabilir mi?\n\nBu hata bazen sürücüye kararlı erişim sağlamayan arızalı okuyuculardan kaynaklanır.',
			cannotWrite:
				'Etcher sürücünün bu konumuna yazamıyor gibi görünüyor. Bu hata genellikle arızalı bir sürücü, okuyucu veya bağlantı noktasından kaynaklanır.\n\nLütfen başka bir sürücü, okuyucu veya bağlantı noktasıyla yeniden deneyin.',
			childWriterDied:
				'Yazma işlemi beklenmedik şekilde sona erdi. Lütfen yeniden deneyin; sorun devam ederse Etcher ekibiyle iletişime geçin.',
			badProtocol: "Yalnızca http:// ve https:// URL'leri desteklenir.",
		},
		target: {
			selectTarget: 'Hedef seç',
			plugTarget: 'Bir hedef sürücü takın',
			targets: 'hedef',
			change: 'Değiştir',
		},
		source: {
			useSourceURL: "Disk görüntüsü URL'si kullan",
			auth: 'Kimlik doğrulama',
			username: 'Kullanıcı adını girin',
			password: 'Parolayı girin',
			unsupportedProtocol: 'Desteklenmeyen protokol',
			windowsImage: 'Olası Windows disk görüntüsü algılandı',
			partitionTable: 'Bölüm tablosu eksik',
			errorOpen: 'Kaynak açılırken hata oluştu',
			fromFile: 'Dosyadan yaz',
			fromURL: "URL'den yaz",
			clone: 'Sürücü klonla',
			image: 'Disk görüntüsü',
			name: 'Ad: ',
			path: 'Yol: ',
			selectSource: 'Kaynak seç',
			plugSource: 'Bir kaynak sürücü takın',
			osImages: 'İşletim sistemi görüntüleri',
			allFiles: 'Tümü',
			enterValidURL: 'Geçerli bir URL girin',
		},
		drives: {
			name: 'Ad',
			size: 'Boyut',
			location: 'Konum',
			find: '{{length}} bulundu',
			select: 'Seç ({{select}})',
			showHidden: '{{num}} gizli sürücüyü göster',
			systemDriveDanger:
				'Sistem sürücünüzü seçmek tehlikelidir ve sürücünüz silinecektir!',
			openInBrowser: 'Etcher, {{link}} adresini tarayıcınızda açacak',
			changeTarget: 'Hedefi değiştir',
			largeDriveWarning:
				'Alışılmadık derecede büyük bir sürücüyü silmek üzeresiniz',
			largeDriveWarningMsg:
				'Seçilen sürücünün bir depolama sürücüsü olmadığından emin misiniz?',
			systemDriveWarning: 'Bilgisayarınızın sürücülerini silmek üzeresiniz',
			systemDriveWarningMsg:
				'Sistem sürücünüze yazmak istediğinizden emin misiniz?',
		},
		flash: {
			another: 'Bir tane daha yaz',
			target: 'Hedef',
			location: 'Konum',
			error: 'Hata',
			flash: 'Yaz',
			flashNow: 'Yaz!',
			skip: 'Doğrulama atlandı',
			moreInfo: 'daha fazla bilgi',
			speedTip:
				'Hız, disk görüntüsü boyutunun yazma süresine bölünmesiyle hesaplanır.\nKullanılmayan kısımları atlayabildiğimiz için ext bölümleri içeren disk görüntüleri daha hızlı yazılır.',
			speed: 'Etkin hız: {{speed}} MB/sn',
			speedShort: '{{speed}} MB/sn',
			eta: 'Kalan süre: {{eta}}',
			failedTarget: 'Başarısız hedefler',
			failedRetry: 'Başarısız hedefleri yeniden dene',
			flashFailed: 'Yazma başarısız oldu.',
			flashCompleted: 'Yazma tamamlandı!',
		},
		settings: {
			errorReporting: "Hataları balena.io'ya anonim olarak bildir",
			autoUpdate: 'Otomatik güncellemeler etkin',
			settings: 'Ayarlar',
			systemInformation: 'Sistem Bilgileri',
			trimExtPartitions:
				'Ham disk görüntülerinde ayrılmamış alanı kırp (ext türündeki bölümlerde)',
		},
		menu: {
			edit: 'Düzen',
			view: 'Görünüm',
			devTool: 'Geliştirici Araçlarını Aç/Kapat',
			window: 'Pencere',
			help: 'Yardım',
			pro: 'Etcher Pro',
			website: 'Etcher Web Sitesi',
			issue: 'Sorun Bildir',
			about: 'Etcher Hakkında',
			hide: "Etcher'ı Gizle",
			hideOthers: 'Diğerlerini Gizle',
			unhide: 'Tümünü Göster',
			quit: "Etcher'dan Çık",
		},
	},
} satisfies typeof en;

export default translation;
