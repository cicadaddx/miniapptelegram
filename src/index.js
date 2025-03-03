// index.js

import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { Button, Input, Card, Typography, Row, Col, Divider } from 'antd';
import './index.css'; // Importando o arquivo CSS

const { Text } = Typography;

function App() {
    const [banca, setBanca] = useState("");
    const [result, setResult] = useState(null);

    const calcularApostas = () => {
        const bancaValor = parseFloat(banca);
        if (isNaN(bancaValor) || bancaValor <= 0) return;

        const zero = (bancaValor * 2) / 100;
        const duzia1 = (bancaValor * 10) / 100;
        const duzia2 = (bancaValor * 10) / 100;

        setResult({ zero, duzia1, duzia2 });
        
        // Aqui você pode adicionar a lógica para enviar os resultados para o Telegram
        // Exemplo: enviarMensagemTelegram(result);
    };

    return (
        <div className="app-container">
            <h1 className="title">🎰 Ouro Del Malvadón</h1>
            <Card className="calculator-card">
                <Row gutter={[16, 16]}>
                    <Col span={24}>
                        <Input
                            type="number"
                            placeholder="Digite sua banca"
                            value={banca}
                            onChange={(e) => setBanca(e.target.value)}
                            className="input-field"
                            size="large"
                        />
                    </Col>
                    <Col span={24}>
                        <Button
                            onClick={calcularApostas}
                            className="calculate-button"
                            size="large"
                        >
                            Calcular Apostas
                        </Button>
                    </Col>
                    <Divider />
                    {result && (
                        <Col span={24} className="result-container">
                            <Text className="result-text">
                                🔵 Zero: R$ {result.zero.toFixed(2)}
                            </Text><br />
                            <Text className="result-text">
                                🟡 1ª Dúzia: R$ {result.duzia1.toFixed(2)}
                            </Text><br />
                            <Text className="result-text">
                                🔴 2ª Dúzia: R$ {result.duzia2.toFixed(2)}
                            </Text>
                        </Col>
                    )}
                </Row>
            </Card>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);