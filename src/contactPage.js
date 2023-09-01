export default function contactPage(){
    const contacts = document.createElement('div');
    contacts.classList.add('contact');

    const employees = [
        {
            name: 'Huba CEO',
            phone: '+46280365469 ',
            img: 'huba',
        },
        {
            name: 'Botond Chef',
            phone: '+46280525440 ',
            img: 'boti',
        },
        {
            name: 'Kriszti Chef de partie',
            phone: '+46223267249',
            img: 'kriszti',
        },
        {
            name: 'Danika Sous-chef',
            phone: '+46940437548',
            img: 'danika',
        },
        {
            name: 'Gabor Cashier',
            phone: '+46258888641',
            img: 'gabi',
        },
    ]

    employees.forEach(employee =>{
        const employeeContainer = document.createElement('div');
        employeeContainer.classList.add('employee-container');

        const employeeDatas = document.createElement('div');
        employeeDatas.classList.add('employee-datas');

        const employeeName = document.createElement('div');
        employeeName.classList.add('employee-name', 'title');
        employeeName.innerText = employee.name;

        const employeeNumber = document.createElement('div');
        employeeNumber.classList.add('employee-number');
        employeeNumber.innerText = employee.phone;

        const employeeImg = document.createElement('div');
        employeeImg.classList.add('employee-img');
        employeeImg.classList.add(employee.img)
        
        employeeDatas.append(employeeName, employeeNumber);
        employeeContainer.append(employeeDatas, employeeImg);

        contacts.append(employeeContainer);
    })

    return contacts
}