export default function Preloader() {
    return (
        <>
            <div className="preloader" style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {/* Aquí está el componente de GIF */}
                <img src="/assets/images/logo/preloader_desktop.gif" alt="Preloader" style={{ width: '100%', height: '100%' }} />
            </div>
        </>
    );
}
