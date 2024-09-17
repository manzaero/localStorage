import './index.css';

class Task {
    setup(){
        document.addEventListener('DOMContentLoaded', () => {
            const $cookie = document.querySelector('.cookie-consent__button');

            if (localStorage.getItem('cookies')){
                document.querySelector('.cookie-consent').remove();
            }

            $cookie.addEventListener('click', (e) => {
                const {target} = e;
                if (target) {
                    document.querySelector('.cookie-consent').remove();
                    localStorage.setItem('cookies', 'document.querySelector(\'.cookie-consent\').remove()')
                    console.log(localStorage.getItem('string'));
                }
            })
        });
    }
}
const task = new Task();
task.setup()
