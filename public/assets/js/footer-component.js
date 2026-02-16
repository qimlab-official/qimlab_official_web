const footerContent = `
    <footer class="py-10 bg-brand-surface border-t border-white/10">
        <div class="container mx-auto px-6">
            <div class="flex flex-col md:flex-row justify-between items-start text-sm text-gray-500">
                <div class="flex flex-col items-center md:items-start gap-4 mb-8 md:mb-0">
                    <div class="font-mono text-center md:text-left">
                        <div class="mb-1">&copy; All Rights Reserved</div>
                        <div class="text-xs opacity-70">Qim Lab Enterprise</div>
                        <div class="text-xs opacity-70">Reg No: 202603007186 (003810616-X)</div>
                    </div>
                    <!-- SSM BizTrust QR Placeholder -->
                    <div class="bg-white p-1 rounded-md w-fit">
                        <img src="assets/img/biztrust_ssm.webp" 
                             alt="SSM BizTrust Verification" 
                             class="w-24 h-24 object-contain"
                             style="display: block;">
                    </div>
                </div>
                
                <div class="flex flex-col md:flex-row gap-8 md:gap-0">
                 <!-- Products -->
                    <div class="flex flex-col mr-12">
                        <h4 class="text-white font-semibold mb-4">Products</h4>
                        <div class="flex flex-col gap-2">
                            <a href="https://mymet.qimlab.my" class="hover:text-brand-accent transition-colors hover-trigger">MyMET</a>
                           
                        </div>
                    </div>
             
                    <!-- Related Links -->
                    <div class="flex flex-col mr-12">
                        <h4 class="text-white font-semibold mb-4">Related Links</h4>
                        <div class="flex flex-col gap-2">
                        <a href="https://github.com/qimlab-official" class="hover:text-brand-accent transition-colors hover-trigger">GitHub</a>

                            
                        </div>
                    </div>
                    <!-- Social Links -->
                    <div class="flex flex-col mr-12">
                        <h4 class="text-white font-semibold mb-4">Connect</h4>
                        <div class="flex flex-col gap-2">
                            <a href="https://www.instagram.com/qim.lab" class="hover:text-brand-accent transition-colors hover-trigger">Instagram</a>
                            <a href="https://www.linkedin.com/company/qim-lab" class="hover:text-brand-accent transition-colors hover-trigger">LinkedIn</a>
                            <a href="https://www.facebook.com/people/Qim-Lab/61578890271648/" class="hover:text-brand-accent transition-colors hover-trigger">Facebook</a>
                            <a href="https://www.threads.com/@qim.lab" class="hover:text-brand-accent transition-colors hover-trigger">Threads</a>
                            <a href="https://x.com/QimLab" class="hover:text-brand-accent transition-colors hover-trigger">X</a>
                        </div>
                    </div>

                    <!-- Contact Us -->
                    <div class="flex flex-col">
                        <h4 class="text-white font-semibold mb-4">Contact Us</h4>
                        <div class="flex flex-col gap-2">
                            <a href="mailto:qimlab.official@gmail.com" class="hover:text-brand-accent transition-colors hover-trigger">Email</a>
                            <a href="https://wa.me/60105044177" class="hover:text-brand-accent transition-colors hover-trigger">WhatsApp</a>
                            <a href="https://cal.com/qim-lab" class="hover:text-brand-accent transition-colors hover-trigger">Free Consultation</a>
                        </div>
                    </div>

                    
                </div>
            </div>
        </div>
    </footer>
`;

class GlobalFooter extends HTMLElement {
    connectedCallback() {
        this.style.display = 'block';
        this.innerHTML = footerContent;
    }
}

customElements.define('global-footer', GlobalFooter);
