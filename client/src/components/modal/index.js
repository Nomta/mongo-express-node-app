import './index.scss';

const Modal = ({ children, hide, title = '' }) => {
    return (
        <div
            onClick={(e) => e.target.classList.contains('modal') && hide()}
            className="modal fade show"
            style={{
                display: 'block',
                backgroundColor: 'rgba(0, 0, 0, 0.5)'
            }}
        >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{title}</h5>
                        <button className="close" onClick={hide}>
                            <span>&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">{children}</div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
