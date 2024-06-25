import React, { useState } from 'react';
import '../style/account.css';

const Account = () => {
    // État pour stocker la valeur de l'adresse e-mail
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

  
    // Fonction de gestionnaire de changement pour mettre à jour l'état de l'adresse e-mail
    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
      };
    
  
    // Fonction de gestionnaire de soumission pour traiter l'envoi de l'adresse e-mail
    const handleSubmit = (event) => {
      event.preventDefault();
      // Ici, vous pouvez traiter l'envoi de l'adresse e-mail, par exemple en l'envoyant à un serveur ou en effectuant une action spécifique
      console.log('Adresse e-mail soumise:', email);
      console.log('Mot de passe soumis:', password);
      // Réinitialiser l'adresse e-mail après l'envoi
      setEmail('');
      setPassword('');
    };

    return (
        <div className="customer">
            <a className="titre"> Already a customer?</a>
            <p className="texte1"> Welcome back! Sign in for faster checkout.</p>
            <form onSubmit={handleSubmit}>
                
                    <input className='email'
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    placeholder="    Email Address"
                    required
                    />
            <div>
                    <input className='password'
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                    placeholder="    Password"
                    required
                    />
                </div>
                
                <button type="submit">Envoyer</button>
            </form>

        </div>
    );
}

export default Account;
