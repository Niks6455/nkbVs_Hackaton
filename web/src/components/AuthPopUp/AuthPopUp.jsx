function AuthPopUp() {
    const tgButton = () => {
        window.Telegram.Login.auth({ bot_id: '7980577250', request_access: 'write' }, async (e) => {
            try {
                const res = await this.$axios.post('/auth/checkTelegramAuthorization', e); // Sending POST request to the backend domain specified in the Telegram bot
                // Further processing of the result goes here
            } catch (error) {
                console.log(error);
            }
        });
    };

    return ( 
        <div>
            <p>AuthPopUp</p>
            <button className="form-button Telegram-button" onClick={tgButton}>
                Authenticate with Telegram
            </button>
        </div>
    );
}

export default AuthPopUp;