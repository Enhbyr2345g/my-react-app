
function Footer()
{
    const yeardate = new Date().getFullYear;
    return (
        <footer>
            <p>@ {yeardate} My WebSite</p>
        </footer>
    );
}

export default Footer