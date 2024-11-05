function subscribe(event) {
    event.preventDefault();
    const birthdaystr = document.getElementById('birthday').value;
    console.log(`birthday: ${birthdaystr}`);
    const today = new Date();
    // convertir en date birthday
    const birthday = new Date(birthdaystr);
    console.log(`${today} - ${birthday}`);
    const age = today.getFullYear() - birthday.getFullYear();
    let result = '';
    switch (true) {
        case (age > 23):
            result = 'Trop vieux';
            break;
        case (age < 20):
            result = 'Trop jeune'
            break;
        case (age >= 20 && age <= 23):
            result = 'Bienvenue';
            break;
    }
    document.getElementById('result').innerText = result;
    console.log(`Result: ${result}`);
    // comparer avec la date du jour pour calculer l'age
    // age > 23 ? message : 'Trop vieux'
    // age > 20 && age < 23 ? message : 'Bienvenue'
    // age < 20 ? message : 'Trop jeune'
}