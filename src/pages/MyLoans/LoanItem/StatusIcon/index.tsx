import React from 'react';
import { FiAlertTriangle, FiAlertCircle, FiX, FiCheck } from 'react-icons/fi';

interface Props {
  status: string;
}

const StatusIcon: React.FC<Props> = ({ status }) => {
  switch (status) {
    case 'aprovado':
      return <FiAlertTriangle size={18} color="#FFCE1E" />;
    case 'analise':
      return <FiAlertCircle size={18} color="#0057FF" />;
    case 'reprovado':
      return <FiX size={18} color="#FF0000" />;
    case 'pago':
      return <FiCheck size={18} color="#00FF0A" />;
    default:
      return null;
  }
};

export default StatusIcon;
