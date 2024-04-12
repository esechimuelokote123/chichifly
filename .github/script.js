const beatGrid = document.getElementById('beatGrid');
const synth = new Tone.Synth().toDestination();
const pattern = new Tone.Sequence(onBeatTrigger, ["C4", "E4", "G4", "B4"], "16n");

// Crear y añadir cajas de beats al grid
for (let i = 0; i < 16; i++) {
    const beatBox = document.createElement('div');
    beatBox.className = 'beat-box';
    beatBox.addEventListener('click', () => toggleBeat(beatBox));
    beatGrid.appendChild(beatBox);
}

function toggleBeat(beatBox) {
    beatBox.classList.toggle('active');
}

function onBeatTrigger(time, note) {
    synth.triggerAttackRelease(note, "16n", time);
}

function togglePlayback() {
    if (Tone.Transport.state === "stopped") {
        Tone.Transport.start();
        pattern.start();
    } else {
        Tone.Transport.stop();
        pattern.stop();
    }
}

import javax.swing.*;

public class BeatMakerApp extends JFrame {
    
    public BeatMakerApp() {
        super("Beat Maker App");
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setSize(600, 400);
        setLocationRelativeTo(null);
        
        // Aquí puedes agregar los componentes de la interfaz, como botones, paneles, etc.
        // Por ejemplo:
        JButton playButton = new JButton("Play");
        JButton stopButton = new JButton("Stop");
        JPanel controlPanel = new JPanel();
        controlPanel.add(playButton);
        controlPanel.add(stopButton);
        
        getContentPane().add(controlPanel);
        
        setVisible(true);
    }
    
    public static void main(String[] args) {
        SwingUtilities.invokeLater(() -> new BeatMakerApp());
    }
}
