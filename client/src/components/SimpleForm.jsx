import { useState } from 'react';

const SimpleForm = () => {
    // State for form fields
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    // State for errors
    const [errors, setErrors] = useState({});

    // State to track if form is submitted
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });

        // Clear error for this field when user starts typing
        if (errors[name]) {
            setErrors({
                ...errors,
                [name]: ''
            });
        }
    };

    // Validation function
    const validateForm = () => {
        const newErrors = {};

        // Name validation
        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        } else if (formData.name.length < 3) {
            newErrors.name = 'Name must be at least 3 characters';
        }

        // Email validation
        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }

        // Password validation
        if (!formData.password) {
            newErrors.password = 'Password is required';
        } else if (formData.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
        }

        // Confirm password validation
        if (!formData.confirmPassword) {
            newErrors.confirmPassword = 'Please confirm your password';
        } else if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
        }

        return newErrors;
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        const validationErrors = validateForm();

        if (Object.keys(validationErrors).length === 0) {
            // Form is valid
            setIsSubmitted(true);
            console.log('Form submitted successfully:', formData);

            // Reset form if needed
            // setFormData({ name: '', email: '', password: '', confirmPassword: '' });
        } else {
            // Form has errors
            setErrors(validationErrors);
            setIsSubmitted(false);
        }
    };

    // Handle reset
    const handleReset = () => {
        setFormData({
            name: '',
            email: '',
            password: '',
            confirmPassword: ''
        });
        setErrors({});
        setIsSubmitted(false);
    };

    return (
        <div style={{ maxWidth: '400px', margin: '50px auto', padding: '20px' }}>
            <h2>Registration Form</h2>

            {isSubmitted && (
                <div style={{
                    padding: '10px',
                    marginBottom: '20px',
                    backgroundColor: '#d4edda',
                    color: '#155724',
                    border: '1px solid #c3e6cb'
                }}>
                    ✅ Form submitted successfully!
                </div>
            )}

            <form onSubmit={handleSubmit}>
                {/* Name Field */}
                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="name">
                        Name: <span style={{ color: 'red' }}>*</span>
                    </label>
                    <br />
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        style={{
                            width: '100%',
                            padding: '8px',
                            marginTop: '5px',
                            border: errors.name ? '2px solid red' : '1px solid #ccc'
                        }}
                    />
                    {errors.name && (
                        <div style={{ color: 'red', fontSize: '14px', marginTop: '5px' }}>
                            {errors.name}
                        </div>
                    )}
                </div>

                {/* Email Field */}
                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="email">
                        Email: <span style={{ color: 'red' }}>*</span>
                    </label>
                    <br />
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        style={{
                            width: '100%',
                            padding: '8px',
                            marginTop: '5px',
                            border: errors.email ? '2px solid red' : '1px solid #ccc'
                        }}
                    />
                    {errors.email && (
                        <div style={{ color: 'red', fontSize: '14px', marginTop: '5px' }}>
                            {errors.email}
                        </div>
                    )}
                </div>

                {/* Password Field */}
                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="password">
                        Password: <span style={{ color: 'red' }}>*</span>
                    </label>
                    <br />
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Enter your password"
                        style={{
                            width: '100%',
                            padding: '8px',
                            marginTop: '5px',
                            border: errors.password ? '2px solid red' : '1px solid #ccc'
                        }}
                    />
                    {errors.password && (
                        <div style={{ color: 'red', fontSize: '14px', marginTop: '5px' }}>
                            {errors.password}
                        </div>
                    )}
                </div>

                {/* Confirm Password Field */}
                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="confirmPassword">
                        Confirm Password: <span style={{ color: 'red' }}>*</span>
                    </label>
                    <br />
                    <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        placeholder="Confirm your password"
                        style={{
                            width: '100%',
                            padding: '8px',
                            marginTop: '5px',
                            border: errors.confirmPassword ? '2px solid red' : '1px solid #ccc'
                        }}
                    />
                    {errors.confirmPassword && (
                        <div style={{ color: 'red', fontSize: '14px', marginTop: '5px' }}>
                            {errors.confirmPassword}
                        </div>
                    )}
                </div>

                {/* Buttons */}
                <div>
                    <button
                        type="submit"
                        style={{
                            padding: '10px 20px',
                            marginRight: '10px',
                            backgroundColor: '#007bff',
                            color: 'white',
                            border: 'none',
                            cursor: 'pointer'
                        }}
                    >
                        Register
                    </button>

                    <button
                        type="button"
                        onClick={handleReset}
                        style={{
                            padding: '10px 20px',
                            backgroundColor: '#6c757d',
                            color: 'white',
                            border: 'none',
                            cursor: 'pointer'
                        }}
                    >
                        Reset
                    </button>
                </div>
            </form>

            {/* Live validation summary */}
            {Object.keys(errors).length > 0 && (
                <div style={{
                    marginTop: '20px',
                    padding: '10px',
                    backgroundColor: '#f8d7da',
                    color: '#721c24',
                    border: '1px solid #f5c6cb'
                }}>
                    <strong>Please fix the following errors:</strong>
                    <ul style={{ marginTop: '10px', marginBottom: '0' }}>
                        {Object.values(errors).map((error, index) => (
                            <li key={index}>{error}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default SimpleForm;