const day = 'noday';
switch (day) {
    case "monday": //day ==='monday'
        console.log('plan course structure');
        console.log('go to coding meetup');
        break;

    case 'tuesday':
        console.log('prepare theory video');
        break;

    case 'wednesday':
    case 'thursday':
        console.log('write code example');
        break;

    case 'friday':
        console.log('record video');
        break;

    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend :D');
        break;

    default:
        console.log("not a valid day");
}

