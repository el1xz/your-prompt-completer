# Автозаполнение вашего промпта
Простой скрипт на JavaScript, который заполняет текстовое поле вашим промптом.

![demo](https://github.com/el1xz/your-prompt-completer/assets/88451996/532359df-a499-4f83-be17-a52b41fe8722)

## Установка скрипта:

1. Установите расширение **[Tampermonkey](https://www.tampermonkey.net/)**
2. **[«Установите Скрипт»](https://raw.githubusercontent.com/el1xz/your-prompt-completer/main/AutoComplete.js)**
3. Либо **[«скопируйте»](https://github.com/el1xz/your-prompt-completer/blob/main/AutoComplete.js)** его и вставьте после нажатия на кнопку "Создать новый скрипт"

> [!WARNING]
> Если вы пользуетесь Tampermonkey 5.2.0+, не забудьте включить режим разработчика в браузере или используйте Tampermonkey MV2

## Пример промптов
```js
const prompts = {
        '_neg': "(deformed iris, deformed pupils), text, worst quality, low quality, jpeg artifacts, ugly, duplicate, morbid, mutilated, (extra fingers), (mutated hands), poorly drawn hands, poorly drawn face, mutation, deformed, blurry, dehydrated, bad anatomy, bad proportions, extra limbs, cloned face, disfigured, gross proportions, malformed limbs, missing arms, missing legs, extra arms, extra legs, (fused fingers), (too many fingers), long neck, camera",
        '_pos': "high quality, masterpiece, best quality, extremely detailed, beautiful, cinematic lighting, sharp focus, stunning composition, dynamic pose, vibrant colors, highly detailed, photorealistic",
    };
```

`_neg` - это константа, которая вводиться в текстовое поле и после нажатия на клавишу **TAB**, заполняет его указанным промптом.

Вы спокойно можете добавлять свои константы и промпты к ним.
