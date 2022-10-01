# Установка

1. Запустить npm init, принять все параметры
2. Установить parcel командой npm install parcel
3. Установить react и react-dom: npm install react react-dom
4. Создать файл index.html
5. Открыть package.json и в scripts добавить "start": "parcel index.html"
6. В index.html создать пустой элемент с id app
7. Создать скрипт index.js и подключить в html
8. В index.js импортировать ReactDOM и вызвать функцию ReactDOM.render(<h1>Check</h1>,app)
9. В консоли выполнить команду npm run start
10. Должен запуститься сервер на http://localhost:1234 
11. Дальше поиграйся с компонентами. СОздай новые, с разными тегами, влючай компоненты друг в друга, передавай данные через Props
