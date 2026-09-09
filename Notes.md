# 🎉 ScrollView vs FlatList

## Use FlatList when:

- Performance is critical: FlatList only renders items currently visible on screen, saving memory and improving performance.
- Long lists of data: When rendering potentially large sets of data (feeds, search results, message lists).
- Unknown content length: When you don't know in advance how many items you'll need to display.
- Same kind of content: When displaying many items with the same structure.

## Use ScrollView when:

- All content fits in memory: When you're displaying a small, fixed amount of content that won't cause performance issues.
- Static content: For screens with predetermined, limited content like forms, profile pages, or detail views.
- Mixed content types: When you need to display different UI components in a specific layout that doesn't follow a list pattern.
- Horizontal carousel-like elements: Small horizontal scrolling components like image carousels with limited items.

# 🚀 Pressable vs TouchableOpacity

## Use Pressable when:

- More customization is needed: Pressable offers more customization options for different states (pressed, hovered, focused).
- Complex interaction states: When you need to handle multiple interaction states with fine-grained control.
- Future-proofing: Pressable is newer and designed to eventually replace the Touchable components.
- Platform-specific behavior: When you want to customize behavior across different platforms.
- Nested press handlers: When you need to handle nested interactive elements.

## Use TouchableOpacity when:

- Simple fade effect: When you just need a simple opacity change on press.
- Backwards compatibility: When working with older codebases that already use TouchableOpacity.
- Simpler API: When you prefer a more straightforward API with fewer options to configure.
- Specific opacity animations: When you need precise control over the opacity value on press.
- Legacy support: For maintaining consistency with existing components.

# 📸 Expo Image vs React Native Image

## Use Expo Image when:

- Performance: Expo Image uses native image libraries that can offer better performance.
- Caching: Built-in caching system is more robust and configurable.
- Modern image capabilities: Need for advanced features like content-aware resizing, blurhash placeholders, and progressive loading.
- Transitions: When you need smooth transitions between image loading states.
- Cross-platform consistency: More consistent behavior across iOS and Android.
- Adaptivity: Better support for adaptive images based on screen size and resolution.

## Use React Native Image when:

- Simplicity: When you need basic image display with minimal configuration.
- Bundle size: When you're trying to keep your app's bundle size smaller.
- No Expo dependency: When you're not using Expo or want to minimize dependencies.
- Legacy support: When maintaining compatibility with existing code that uses React Native Image.
- Basic requirements: When advanced image features aren't needed for your use case.

# 👀 icon.png vs adaptive-icon.png

## 💥 icon.png

- This is the standard app icon that appears on most devices. It's the primary icon for your app
- Recommended img size: 1024x1024

## 💫 adaptive-icon.png

- Introduced in Android 8.0 (Oreo), this is specific to Android devices.
- Recommended img size: 1024x1024

**If you don't provide these icons, your app will still work, but it will use Expo's default icons. For a professional app that you plan to publish to the App Store or Play Store, you should definitely include your own custom icons**

# 🎁 React Native Directory

- We can find hundreds of other third-party libraries at: https://reactnative.directory

# 🤌 React Native Gesture Handler

- Gestures are a great way to provide an intuitive user experience in an app.
- The **React Native Gesture Handler** library provides built-in native components that can handle gestures.
- It recognizes pan, tap, rotation, and other gestures using the platform's native touch handling system
- Learn more: https://docs.swmansion.com/react-native-gesture-handler/docs/

# 🐴 React Native Reanimated

- Create smooth animations with an excellent developer experience.
- Learn more: https://docs.swmansion.com/react-native-reanimated/

# Building & Publishing

- You can build your app for production with Expo Application Services (EAS)
- If you want to submit it to Google Play Store / App Store you'll need a developer account
- It would take couple of days/weeks till your app gets accepted and go live
- https://docs.expo.dev/deploy/build-project/
- https://docs.expo.dev/deploy/submit-to-app-stores/

## Steps

- visit expo.dev and signup
- npm i -g eas-cli
- eas login
- eas init => it'll ask you to create a project, just say yes
- eas build --platform android => builds for android => will give you APK file
- eas build --platform ios => builds for ios => will give you IPA file
- Then you'd take those files and submit to play store or app store

# Your challenge to publish this app and let us know! ✨

**ScrollView vs FlatList**

**Используйте FlatList, если:**

- Критически важна производительность: FlatList рендерит только те элементы, которые видимы на экране, что экономя память и повышая производительность.
- Большие списки данных: при рендеринге потенциально огромных массивов данных (ленты новостей, результаты поиска, списки сообщений).
- Неизвестная длина контента: когда вы заранее не знаете, сколько элементов потребуется отобразить.
- Однотипный контент: при отображении множества элементов с одинаковой структурой.

**Используйте ScrollView, если:**

- Весь контент помещается в памяти: когда вы отображаете небольшой фиксированный объем контента, который не вызовет проблем с производительностью.
- Статический контент: для экранов с заранее определенным ограниченным содержимым (формы, страницы профиля или экраны деталей).
- Смешанные типы контента: когда нужно отобразить разные UI-компоненты в специфическом макете, не следующем паттерну списка.
- Горизонтальные карусели: для небольших компонентов с горизонтальной прокруткой и ограниченным количеством элементов (например, карусели изображений).

---

**Pressable vs TouchableOpacity**

**Используйте Pressable, если:**

- Требуется гибкая кастомизация: Pressable предоставляет больше параметров настройки для различных состояний (нажатие, наведение, фокус).
- Сложные состояния взаимодействия: когда нужно обрабатывать несколько состояний взаимодействия с точным контролем.
- Задел на будущее: Pressable более нов и призван со временем заменить компоненты Touchable.
- Платформозависимое поведение: когда вы хотите настроить поведение отдельно для разных платформ.
- Вложенные обработчики нажатий: когда необходимо обрабатывать вложенные интерактивные элементы.

**Используйте TouchableOpacity, если:**

- Нужен простой эффект затухания: когда требуется только базовое изменение прозрачности при нажатии.
- Обратная совместимость: при работе со старыми кодовыми базами, где уже используется TouchableOpacity.
- Более простой API: если вы предпочитаете понятный API с меньшим количеством конфигураций.
- Специфические анимации прозрачности: когда нужен точный контроль над значением прозрачности при нажатии.
- Поддержка легаси-кода: для сохранения единообразия с существующими компонентами.

---

**Expo Image vs React Native Image**

**Используйте Expo Image, если:**

- Производительность: Expo Image использует нативные библиотеки изображений, обеспечивающие высокую скорость работы.
- Кэширование: встроенная система кэширования более надежная и гибкая в настройке.
- Современные возможности: нужны продвинутые функции, такие как умное изменение размера (content-aware), плейсхолдеры blurhash и прогрессивная загрузка.
- Переходы: когда нужны плавные анимации смены состояний загрузки изображений.
- Кроссплатформенная стабильность: более согласованное поведение на iOS и Android.
- Адаптивность: лучшая поддержка адаптивных изображений в зависимости от размера и разрешения экрана.

**Используйте React Native Image, если:**

- Простота: когда нужно базовое отображение изображений с минимальной настройкой.
- Размер бандла: когда вы пытаетесь минимизировать итоговый размер приложения.
- Без зависимости от Expo: если вы не используете Expo или хотите свести количество зависимостей к минимуму.
- Поддержка легаси-кода: при сохранении совместимости с существующим кодом на React Native Image.
- Базовые требования: когда продвинутые функции работы с изображениями не требуются.

---

**icon.png vs adaptive-icon.png**

**icon.png**

- Это стандартная иконка приложения, которая отображается на большинстве устройств. Она является основной иконкой вашего приложения.
- Рекомендуемый размер изображения: 1024x1024.

**adaptive-icon.png**

- Появилась в Android 8.0 (Oreo) и предназначена специально для устройств на базе Android.
- Рекомендуемый размер изображения: 1024x1024.

**Если вы не укажете эти иконки, ваше приложение всё равно будет работать, но станет использовать иконки по умолчанию от Expo. Для профессионального приложения, которое вы планируете опубликовать в App Store или Play Store, обязательно стоит добавить собственные иконки.**

---

**React Native Directory**

- Сотни других сторонних библиотек можно найти по ссылке: [https://reactnative.directory](https://reactnative.directory)

---

**React Native Gesture Handler**

- Жесты — отличный способ сделать пользовательский интерфейс приложения интуитивно понятным.
- Библиотека **React Native Gesture Handler** предоставляет встроенные нативные компоненты для обработки жестов.
- Она распознает панорамирование, тапы, вращение и другие жесты, используя нативную систему обработки касаний платформы.
- Подробнее: [https://docs.swmansion.com/react-native-gesture-handler/docs/](https://docs.swmansion.com/react-native-gesture-handler/docs/)

---

**React Native Reanimated**

- Создавайте плавные анимации с отличным опытом разработки (DX).
- Подробнее: [https://docs.swmansion.com/react-native-reanimated/](https://docs.swmansion.com/react-native-reanimated/)

---

**Сборка и публикация**

- Вы можете собрать продакшн-версию приложения с помощью Expo Application Services (EAS).
- Для отправки приложения в Google Play Store / App Store вам потребуется аккаунт разработчика.
- Проверка и публикация приложения может занять от нескольких дней до нескольких недель.
- [https://docs.expo.dev/deploy/build-project/](https://docs.expo.dev/deploy/build-project/)
- [https://docs.expo.dev/deploy/submit-to-app-stores/](https://docs.expo.dev/deploy/submit-to-app-stores/)

**Шаги**

- Перейдите на expo.dev и зарегистрируйтесь.
- `npm i -g eas-cli`
- `eas login`
- `eas init` => утилита предложит создать проект, выберите согласие.
- `eas build --platform android` => сборка для Android => создаст APK-файл.
- `eas build --platform ios` => сборка для iOS => создаст IPA-файл.
- Затем эти файлы нужно загрузить и отправить на проверку в Play Store или App Store.

---

**Ваш челлендж — опубликовать это приложение и рассказать нам! ✨**
