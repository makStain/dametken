document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Форманы жіберу мен бетті қайта жүктеуді тоқтату

    // Пайдаланушының енгізген мәліметтерін алу
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Пайдаланушының мәліметтерін тексеру
    if (!name || !email || !message) {
        alert('Барлық өрістерді толтырыңыз!');
        return;
    }

    // Хабарлама жіберілгенін көрсету
    alert(`Хабарлама жіберілді! \nАты-жөні: ${name} \nЭлектрондық пошта: ${email} \nХабарлама: ${message}`);
    
    // Қажет болса, серверге ақпаратты жіберу (мысалы, AJAX арқылы)
});
// Обработчик для секции "Рассчитать стоимость"
document.getElementById('calculate-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Предотвращаем перезагрузку страницы при отправке формы

    const weight = parseFloat(document.getElementById('weight').value);
    const fromCity = document.getElementById('from-city').value;
    const toCity = document.getElementById('to-city').value;

    if (isNaN(weight) || weight < 500) {
        alert('Вес должен быть не менее 500 кг');
        return;
    }

    const basePrice = 15000;  // Стоимость за 500 кг
    const pricePerKg = 30;    // Стоимость за каждый дополнительный кг
    const totalCost = basePrice + (weight - 500) * pricePerKg;

    // Генерация случайного номера отслеживания
    const trackingNumber = generateTrackingNumber();

    document.getElementById('cost-result').innerHTML = `
        <p>Стоимость перевозки: ${totalCost} тенге</p>
        <p>Номер отслеживания: ${trackingNumber}</p>
        <p>Откуда: ${fromCity}</p>
        <p>Куда: ${toCity}</p>
    `;
});

// Функция для генерации случайного номера отслеживания
function generateTrackingNumber() {
    return 'TK-' + Math.random().toString(36).substr(2, 9).toUpperCase();
}

// Обработчик для секции "Отследить груз"
document.getElementById('track-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Предотвращаем перезагрузку страницы при отправке формы

    const trackingNumber = document.getElementById('tracking-number').value;

    // Проверка введенного номера отслеживания
    if (!trackingNumber) {
        alert('Пожалуйста, введите номер отслеживания.');
        return;
    }

    // Для демонстрации: предполагаем, что номер отслеживания существует
    document.querySelector('#track .track-container').innerHTML = `
        <h2>Статус груза</h2>
        <p>Номер отслеживания: ${trackingNumber}</p>
        <p>Груз в пути, ожидайте прибытие через 3 дня.</p>
    `;
});
