// CSS
import './styles/styles.scss';

// JS
require('bootstrap');
import './components/Root';
import AvatarPicker from './avatarPicker';

function loadAvatarPicker() {
    const avatarSelector = document.getElementById('avatar-selector');
    if (!avatarSelector) {
        return;
    }

    const picker = new AvatarPicker();
}

function main() {
    loadAvatarPicker();
}

document.addEventListener('DOMContentLoaded', main);
