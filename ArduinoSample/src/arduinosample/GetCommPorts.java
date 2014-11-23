/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package arduinosample;

import gnu.io.CommPortIdentifier;
import gnu.io.NoSuchPortException;
import gnu.io.PortInUseException;
import gnu.io.SerialPort;
import gnu.io.SerialPortEvent;
import gnu.io.SerialPortEventListener;
import gnu.io.UnsupportedCommOperationException;

import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.Enumeration;
import java.util.TooManyListenersException;

public class GetCommPorts {

    static Enumeration<CommPortIdentifier> portList;
    static CommPortIdentifier portId;
    static SerialPort serialPort;
    static OutputStream outputStream;
    static boolean outputBufferEmptyFlag = false;
    static String aVachtID = "";

    public static class SerialReader implements SerialPortEventListener {

        private InputStream in;
        private byte[] buffer = new byte[1024];

        public SerialReader(InputStream in) {
            this.in = in;
        }

        @Override
        /**
         * treat \n as end of block.
         */
        public void serialEvent(SerialPortEvent ev) {
            int data;

            try {
                int len = 0;
                while ((data = in.read()) > -1) {
                    if (data == '\n') {
                        break;
                    }
                    buffer[len++] = (byte) data;
                }
                System.out.println(new String(buffer, 0, len));
            } catch (IOException e) {
                // TODO Auto-generated catch block
                e.printStackTrace();
                System.exit(-1);
            }
        }
    }

    public static class SerialWriter implements Runnable {

        OutputStream out;

        public SerialWriter(OutputStream out) {
            this.out = out;
        }

        @Override
        public void run() {
            try {
                int c = 0;
                while ((c = System.in.read()) > -1) {
                    this.out.write(c);
                }
            } catch (IOException e) {
                // TODO Auto-generated catch block
                e.printStackTrace();
                System.exit(-1);
            }

        }

    }

    private static String getPortTypeName(int portType) {
        switch (portType) {
            case CommPortIdentifier.PORT_I2C:
                return "I2C";
            case CommPortIdentifier.PORT_PARALLEL:
                return "Parallel";
            case CommPortIdentifier.PORT_RAW:
                return "Raw";
            case CommPortIdentifier.PORT_RS485:
                return "RS485";
            case CommPortIdentifier.PORT_SERIAL:
                return "Serial";
            default:
                return "unknown type";
        }
    }

    private static void listPorts() {
        @SuppressWarnings("unchecked")
        java.util.Enumeration<CommPortIdentifier> portEnum = CommPortIdentifier.getPortIdentifiers();

        while (portEnum.hasMoreElements()) {
            CommPortIdentifier portIdentifier = portEnum.nextElement();
            System.out.println(portIdentifier.getName() + " - " + getPortTypeName(portIdentifier.getPortType()));

            if (portIdentifier.getPortType() == 1) {
                try {
                    serialPort = (SerialPort) portIdentifier.open(portIdentifier.getName(), 3000);
                } catch (PortInUseException e) {
                    System.err.print("port in use");
                    continue;
                }

                System.out.println("Baud is " + serialPort.getBaudRate());
                System.out.println("Bits is " + serialPort.getDataBits());
                System.out.println("Stop is " + serialPort.getStopBits());
                System.out.println("Par is " + serialPort.getParity());
                serialPort.close();
            }
        }
    }

    /**
     * Основной цикл чтения/записи из порта
     *
     * @param portName
     * @return
     */
    private static int doReadWrite(String portName) {
        CommPortIdentifier portIdentifier;

        try {
            portIdentifier = CommPortIdentifier.getPortIdentifier(portName);

            if (portIdentifier.isCurrentlyOwned()) {
                System.err.println("error: port is currently in use");
                return -1;
            }

            SerialPort sport = (SerialPort) portIdentifier.open(portName, 3000);
            sport.setSerialPortParams(9600, SerialPort.DATABITS_8, SerialPort.STOPBITS_1, SerialPort.PARITY_NONE);

            InputStream in = sport.getInputStream();
            OutputStream out = sport.getOutputStream();

            (new Thread(new SerialWriter(out))).start();
            //ToDo необходимо пройти авторизацию на сервере
            //Самое главное - добавляем слушателя событий последовательного порта
            sport.addEventListener(new SerialReader(in));
            sport.notifyOnDataAvailable(true);

        } catch (NoSuchPortException e) {
            e.printStackTrace();
            return -1;
        } catch (PortInUseException e) {
            e.printStackTrace();
            return -1;
        } catch (UnsupportedCommOperationException e) {
            e.printStackTrace();
            return -1;
        } catch (IOException e) {
            e.printStackTrace();
            return -1;
        } catch (TooManyListenersException e) {
            e.printStackTrace();
            return -1;
        }

        return 0;
    }

    static void showHelp() {
        System.out.println("Usage " + GetCommPorts.class.getName() + " PortName " + "VachtaID");
        System.out.println("for example COM5 or /dev/ttyUSB0");
    }

    public static void main(String[] args) {
        String port = "";
        try {
            if (args.length != 2) {
                showHelp();
                return;
            }
            port = args[0];
            aVachtID = args[1];
        } catch (NumberFormatException e) {
            System.out.println("Something went seriously wrong");
        }
        doReadWrite(port);

    }
}
