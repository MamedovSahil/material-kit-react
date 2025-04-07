import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { FC, ReactNode } from 'react';
import { X } from '@phosphor-icons/react';

interface HeaderProps {
  hidden: boolean;
  title?: string;
}

interface Props {
  open: boolean;
  onClose: () => void;
  renderHeader?: HeaderProps;
  children?: ReactNode;
  className?: string;
}

export const CustomModal: FC<Props> = ({ open, onClose, children, renderHeader, className }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div
        className={`absolute rounded-md  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] bg-white shadow-2xl ${className}`}
      >
        {!renderHeader?.hidden && (
          <div className="flex items-center justify-center border-b border-gray-300 px-8 py-2 font-semibold text-black/60 md:px-2 md:py-1 md:pl-1">
            <div className="flex flex-grow justify-center">
              <div className="text-[#313132] text-2xl font-medium p-4 m-0 md:text-base md:p-2">
                {renderHeader?.title}
              </div>
            </div>
            <div className="text-[rgba(58,53,65,0.54)] cursor-pointer">
              {renderHeader?.title && <X onClick={onClose} size={24} />}
            </div>
          </div>
        )}
        <div className="p-8">{children}</div>
      </div>
    </Modal>
  );
};
