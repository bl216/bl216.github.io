export default function GenerateKeypair() {
    return (
        <div>
            ssh-keygen -t rsa -b 4096 -C "blcu216@gmail.com"
            <br/>
        </div>
    );
}