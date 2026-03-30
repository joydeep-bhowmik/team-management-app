# Team Management App

A comprehensive team management application built with Laravel, designed to streamline employee management, attendance tracking, leave applications, task assignments, and team communication.

## Features

### Core Functionality
- **User Management**: Employee profiles with designations, contact information, and media uploads
- **Attendance Tracking**: Clock in/out functionality with attendance requests and management
- **Leave Management**: Submit, approve, and track leave applications with different types
- **Task Management**: Create, assign, and track tasks with file attachments and conversations
- **Team Communication**: Built-in conversation system for task discussions and team collaboration
- **Notes System**: Personal and shared notes for team members
- **Event Management**: Schedule and manage team events
- **Guidelines**: Centralized documentation and guidelines for the team

### Administrative Features
- **Employee Management**: Add, edit, and manage employee records
- **Designation Management**: Create and assign job roles and permissions
- **Attendance Oversight**: Monitor and manage all attendance records
- **Leave Approvals**: Review and approve/decline leave requests
- **System Administration**: Full admin panel for system management

### Technical Features
- **Real-time Notifications**: Firebase Cloud Messaging (FCM) for push notifications
- **File Uploads**: Media library integration for document and image management
- **Responsive Design**: Mobile-friendly interface with Tailwind CSS and DaisyUI
- **Onboarding System**: Guided setup process for new users
- **API Support**: RESTful API with Laravel Sanctum authentication

## Tech Stack

- **Backend**: Laravel 11.x
- **Frontend**: Livewire, Volt, Mary UI
- **Styling**: Tailwind CSS, DaisyUI
- **Build Tool**: Vite
- **Database**: MySQL/PostgreSQL (via Laravel migrations)
- **Authentication**: Laravel Sanctum
- **Notifications**: Firebase Cloud Messaging
- **Media Management**: Custom Laravel Media Library
- **Testing**: Pest PHP

## Prerequisites

- PHP 8.2 or higher
- Composer
- Node.js 16+ and npm
- MySQL/PostgreSQL database
- Firebase project (for notifications)

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd team-management-app
   ```

2. **Install PHP dependencies**
   ```bash
   composer install
   ```

3. **Install Node.js dependencies**
   ```bash
   npm install
   ```

4. **Environment Configuration**
   ```bash
   cp .env.example .env
   ```

   Update the `.env` file with your database credentials, Firebase configuration, and other settings:
   ```env
   APP_NAME="Team Management App"
   APP_ENV=local
   APP_KEY=
   APP_DEBUG=true
   APP_URL=http://localhost

   DB_CONNECTION=mysql
   DB_HOST=127.0.0.1
   DB_PORT=3306
   DB_DATABASE=team_management
   DB_USERNAME=your_username
   DB_PASSWORD=your_password

   # Firebase Configuration
   FIREBASE_PROJECT_ID=your_project_id
   FIREBASE_PRIVATE_KEY=your_private_key
   FIREBASE_CLIENT_EMAIL=your_client_email
   ```

5. **Generate application key**
   ```bash
   php artisan key:generate
   ```

6. **Run database migrations**
   ```bash
   php artisan migrate
   ```

7. **Seed the database (optional)**
   ```bash
   php artisan db:seed
   ```

8. **Build assets**
   ```bash
   npm run build
   # or for development
   npm run dev
   ```

9. **Start the development server**
   ```bash
   php artisan serve
   ```

## Usage

### For Employees
1. **Register/Login**: Create an account or log in with existing credentials
2. **Complete Onboarding**: Follow the guided setup process
3. **Daily Attendance**: Clock in/out using the attendance system
4. **Manage Tasks**: View assigned tasks, update progress, and participate in conversations
5. **Leave Applications**: Submit leave requests and track their status
6. **Team Collaboration**: Use the people directory and notes system

### For Administrators
1. **Access Admin Panel**: Log in with admin credentials
2. **Manage Employees**: Add new employees, assign designations
3. **Oversee Attendance**: Monitor attendance records and handle requests
4. **Approve Leaves**: Review and approve/decline leave applications
5. **Create Tasks**: Assign tasks to team members
6. **Manage Events**: Schedule team events and announcements

## API Documentation

The application provides RESTful APIs for mobile app integration:

- Authentication endpoints (Sanctum)
- User management
- Attendance tracking
- Task management
- Leave applications

API routes are defined in `routes/api.php`.

## Testing

Run the test suite using Pest PHP:

```bash
# Run all tests
php artisan test

# Run with coverage
php artisan test --coverage
```

## Deployment

1. **Production Environment Setup**
   ```bash
   composer install --optimize-autoloader --no-dev
   php artisan config:cache
   php artisan route:cache
   php artisan view:cache
   ```

2. **Build Assets for Production**
   ```bash
   npm run build
   ```

3. **Database Migration on Server**
   ```bash
   php artisan migrate --force
   ```

4. **Queue Worker (if using queues)**
   ```bash
   php artisan queue:work
   ```

## Configuration

### Firebase Setup
1. Create a Firebase project at https://console.firebase.google.com/
2. Enable Cloud Messaging
3. Generate a service account key
4. Add the credentials to your `.env` file

### File Storage
The application supports local and FTP storage. Configure in `config/filesystems.php` and `.env`:

```env
FILESYSTEM_DISK=local
# or
FILESYSTEM_DISK=ftp
FTP_HOST=your_ftp_host
FTP_USERNAME=your_ftp_username
FTP_PASSWORD=your_ftp_password
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Code Quality

- Follow PSR-12 coding standards
- Use Laravel Pint for code formatting: `composer run pint`
- Write tests for new features
- Use meaningful commit messages

## Security

- All user inputs are validated and sanitized
- Passwords are hashed using Laravel's built-in hashing
- API authentication uses Laravel Sanctum tokens
- File uploads are validated for type and size

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support and questions:
- Create an issue in the repository
- Contact the development team
- Check the documentation in the `docs/` folder

## Changelog

See [CHANGELOG.md](CHANGELOG.md) for version history and updates.

---

Built with ❤️ using Laravel

## Contributing

Thank you for considering contributing to the Laravel framework! The contribution guide can be found in the [Laravel documentation](https://laravel.com/docs/contributions).

## Code of Conduct

In order to ensure that the Laravel community is welcoming to all, please review and abide by the [Code of Conduct](https://laravel.com/docs/contributions#code-of-conduct).

## Security Vulnerabilities

If you discover a security vulnerability within Laravel, please send an e-mail to Taylor Otwell via [taylor@laravel.com](mailto:taylor@laravel.com). All security vulnerabilities will be promptly addressed.

## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
