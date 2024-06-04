import React, { useState } from 'react';
import './style.css';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [errors, setErrors] = useState({});

    const validate = () => {
        const errors = {};

        if (!formData.name) {
            errors.name = 'Nazwa wymagana';
        }

        if (!formData.email) {
            errors.email = 'Email wymagany';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = 'Email jest nie poprawny';
        }

        if (!formData.message) {
            errors.message = 'Wiadomosc wymagana';
        }

        return errors;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const validationErrors = validate();
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            console.log('Dane:', formData);
            alert('Formularz przeslany poprawnie');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
                <label htmlFor="name">Nazwa</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />
                {errors.name && <p className="error">{errors.name}</p>}
            </div>

            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
                {errors.email && <p className="error">{errors.email}</p>}
            </div>

            <div className="form-group">
                <label htmlFor="message">Wiadomość</label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                ></textarea>
                {errors.message && <p className="error">{errors.message}</p>}
            </div>

            <button type="submit">Wyślij</button>
        </form>
    );
}
