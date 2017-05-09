export class SocketHandler
{
    io:any;

    constructor(io:any){
        this.io = io;
    }

    EnableEvents = ()=>
    {
        this.io.on('connection', function (socket) {
            socket.emit('news', {hello: 'world'});
            socket.on('my other event', function (data) {
                console.log(data);
            });
        });
    };

}