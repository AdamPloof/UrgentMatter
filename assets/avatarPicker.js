/** 
 * This class is responsbile for the avatar selector in the portal form.
 * It keeps track of the following elements on the page:
 *  - The avatar hidden form field (this is what's submitted with the form)
 *  - The avatar selections (to display after making a selection)
 *  - The user avatar in the nav bar
 *  - The active avatar selection
 *  - The avatar options in the modal (this is what the user selects)
 */
export default class AvatarPicker {
    inputField;
    avatarSelections;
    userAvatars;
    activeSelection;
    avatarOptions;

    constructor() {
        this.inputField = document.getElementById('ticket_avatar');
        this.avatarSelections = document.querySelectorAll('.avatar-selection');
        this.userAvatars = document.querySelectorAll('.user-avatar');
        this.avatarOptions = document.querySelectorAll('.avatar-option');
        this.activeSelection = this.findActiveSelection();
        this.initOptions();

        this.foo = 'foo';

        this.initOptions = this.initOptions.bind(this);
        this.handleSelectAvatar = this.handleSelectAvatar.bind(this);
    }

    initOptions() {
        this.avatarOptions.forEach(opt => {
            opt.addEventListener('click', (e) => {
                this.handleSelectAvatar(e.currentTarget.id.replace('avatar_option_', ''));
            });
        });
    }
    
    /**
     * When the selected avatar changes:
     *  - hide non-selected avatar images
     *  - show selected avatar image
     *  - update hidden avatar input to selected avatar
     * 
     * @param {string} avatarId 
     */
    handleSelectAvatar(avatarId) {
        this.inputField.value = `${avatarId}.jpg`;
        this.hideAllSelections();
        this.showAvatarSelection(avatarId);
        // this.hideAllUserAvatars();
        // this.showUserAvatar(avatarId);
    }

    showAvatarSelection(avatarId) {
        for (const selection of this.avatarSelections) {
            if (selection.id === `avatar_selection_${avatarId}`) {
                selection.classList.remove('hide');
                if (!selection.classList.contains('active')) {
                    selection.classList.add('active');
                }
            }
        }
    }

    hideAllSelections() {
        for (const selection of this.avatarSelections) {
            if (!selection.classList.contains('hide')) {
                selection.classList.add('hide');
            }
        }
    }

    showUserAvatar(avatarId) {
        console.log(`user_avatar_${avatarId}`);

        for (const avatar of this.userAvatars) {
            if (avatar.id === `user_avatar_${avatarId}`) {
                avatar.classList.remove('hide');
                if (!avatar.classList.contains('active')) {
                    avatar.classList.add('active');
                }
            }
        }
    }

    hideAllUserAvatars() {
        for (const avatar of this.userAvatars) {
            if (!avatar.classList.contains('hide')) {
                avatar.classList.add('hide');
            }
        }
    }

    findActiveSelection() {
        let activeSelection;
        for (const selection of this.avatarSelections) {
            if (selection.classList.contains('active')) {
                activeSelection = selection;
                break;
            }
        }

        return activeSelection;
    }
}
